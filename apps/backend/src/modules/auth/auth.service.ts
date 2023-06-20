import { HttpService } from '@nestjs/axios';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CommandBus } from '@nestjs/cqrs';
import { Cache } from 'cache-manager';
import { isUUID } from 'class-validator';
import { JwtPayload } from 'jsonwebtoken';
import { catchError, firstValueFrom, map } from 'rxjs';
import { AppConfigDto } from '../../dtos/app-config.dto';
import { guidToUuid } from '../../utils/guid-to-uuid.util';
import { SyncUserCommand } from '../user/commands/sync-user/sync-user.command';
import { CACHE_USER_PREFIX, KEYCLOAK_PUBLIC_KEY } from './auth.constants';

@Injectable()
export class AuthService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    private readonly commandBus: CommandBus,
    private readonly configService: ConfigService<AppConfigDto, true>,
    private readonly httpService: HttpService,
  ) {}

  private async getKeycloakPublicKeyFromCache(): Promise<string | undefined> {
    const pk = await this.cacheManager.get<string | undefined>(KEYCLOAK_PUBLIC_KEY);
    return pk;
  }

  private getUserIdFromSub(sub: string) {
    let id: string | undefined;

    if (isUUID(sub, 4)) {
      // By default, keycloak uses UUIDs as values for `sub`
      id = sub;
    } else if (sub.indexOf('@idir') > -1) {
      // IDIR ids are of the format <GUID>@idir
      id = guidToUuid(sub.replace('@idir', ''));
    }

    return id;
  }

  async getKeycloakPublicKey() {
    let pk = await this.getKeycloakPublicKeyFromCache();

    if (pk == null) {
      const response: Record<string, unknown> = await firstValueFrom(
        this.httpService
          .get(this.configService.get('KEYCLOAK_REALM_URL'))
          .pipe(map((r) => r.data))
          .pipe(
            catchError((err) => {
              throw new Error(err);
            }),
          ),
      );

      await this.cacheManager.set(
        KEYCLOAK_PUBLIC_KEY,
        `-----BEGIN PUBLIC KEY-----\n${response.public_key}\n-----END PUBLIC KEY-----`,
        5 * 60 * 1000,
      );

      pk = await this.getKeycloakPublicKeyFromCache();
    }

    return pk;
  }

  async getUserFromPayload(data: JwtPayload) {
    const { sub, name, email, client_roles, exp } = data;
    const id = this.getUserIdFromSub(sub);

    const CACHE_KEY = `${CACHE_USER_PREFIX}${id}`;
    let match = await this.cacheManager.get<Express.User>(CACHE_KEY);

    if (!match) {
      const user: Express.User = { id, name, email, roles: (client_roles as string[]).sort() };

      await this.commandBus.execute(new SyncUserCommand(user, { created_by: user.id }));
      await this.cacheManager.set(CACHE_KEY, user, (exp ?? 0) * 1000 - Date.now());
      match = await this.cacheManager.get<Express.User>(CACHE_KEY);
    }

    return match;
  }
}
