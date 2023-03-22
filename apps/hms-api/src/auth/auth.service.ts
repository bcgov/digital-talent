import { HttpService } from '@nestjs/axios';
import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cache } from 'cache-manager';
import { catchError, firstValueFrom, map } from 'rxjs';
import { EnvironmentDto } from '../dtos/environment.dto';
import { KEYCLOAK_REALM_PUBLIC_KEY } from './auth.constants';

@Injectable()
export class AuthService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    private readonly configService: ConfigService<EnvironmentDto, true>,
    private readonly httpService: HttpService,
  ) {}

  private getKeycloakRealmPublicKeyFromCache = async () => {
    const pk = await this.cacheManager.get<string | undefined>(KEYCLOAK_REALM_PUBLIC_KEY);
    return pk;
  };

  getKeycloakRealmPublicKey = async () => {
    let pk = await this.getKeycloakRealmPublicKeyFromCache();
    if (!pk) {
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
        KEYCLOAK_REALM_PUBLIC_KEY,
        `-----BEGIN PUBLIC KEY-----${response.public_key}-----END PUBLIC KEY-----`,
        5 * 60 * 1000,
      );
      pk = await this.getKeycloakRealmPublicKeyFromCache();
    }

    return pk ?? null;
  };
}
