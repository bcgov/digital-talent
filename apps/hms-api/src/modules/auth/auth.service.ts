import { HttpService } from '@nestjs/axios';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CommandBus } from '@nestjs/cqrs';
import { Cache } from 'cache-manager';
import { JwtPayload } from 'jsonwebtoken';
import { catchError, firstValueFrom, map } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import * as jwt from 'jsonwebtoken';
import { AppConfigDto } from '../../dtos/app-config.dto';
import { PrismaService } from '../prisma/prisma.service';
import { CACHE_USER_PREFIX, KEYCLOAK_PUBLIC_KEY } from './auth.constants';
import { SyncAccountCommand } from './commands/sync-account/sync-account.command';

@Injectable()
export class AuthService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    private readonly commandBus: CommandBus,
    private readonly configService: ConfigService<AppConfigDto, true>,
    private readonly httpService: HttpService,
    private readonly prisma: PrismaService,
  ) {}

  private async getKeycloakPublicKeyFromCache(): Promise<string | undefined> {
    const pk = await this.cacheManager.get<string | undefined>(KEYCLOAK_PUBLIC_KEY);
    return pk;
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
    const { sub, identity_provider, name, email, client_roles, exp } = data;

    // const id = this.getUserIdFromSub(sub);

    const CACHE_KEY = `${CACHE_USER_PREFIX}${sub}-${identity_provider}`;
    let match = await this.cacheManager.get<Express.User>(CACHE_KEY);

    if (!match) {
      // Store User, Identity
      const identity = await this.prisma.identity.findUnique({
        where: { sub_identity_provider: { identity_provider, sub } },
      });

      let id = '';
      if (identity) {
        id = identity.user_id;
      } else {
        const existingUser = await this.prisma.user.findUnique({
          where: { email },
        });

        id = existingUser ? existingUser.id : uuidv4();
      }

      const user: Express.User = { id, name, email, roles: ((client_roles as string[]) ?? []).sort() };

      await this.commandBus.execute(
        new SyncAccountCommand({ ...user, sub, identity_provider }, { created_by: user.id }),
      );
      await this.cacheManager.set(CACHE_KEY, user, (exp ?? 0) * 1000 - Date.now());
      match = await this.cacheManager.get<Express.User>(CACHE_KEY);
    }

    return match;
  }

  async exchangeCodeForToken(code: string): Promise<string> {
    const tokenEndpoint = `${this.configService.get('KEYCLOAK_REALM_URL')}/protocol/openid-connect/token`;
    const clientId = this.configService.get('KEYCLOAK_CLIENT_ID');
    const clientSecret = this.configService.get('KEYCLOAK_CLIENT_SECRET');
    const redirectUri = `http://localhost:5173/auth/callback`;

    const data = `client_id=${encodeURIComponent(clientId)}&client_secret=${encodeURIComponent(
      clientSecret,
    )}&grant_type=authorization_code&code=${encodeURIComponent(code)}&redirect_uri=${encodeURIComponent(redirectUri)}`;

    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    this.httpService.axiosRef.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    const response = await firstValueFrom(this.httpService.post(tokenEndpoint, data, { headers }));

    return response.data.access_token;
  }

  async verifyToken(code: string): Promise<JwtPayload> {
    // First, get the access token by exchanging the code
    const accessToken = await this.exchangeCodeForToken(code);

    // Then, verify the JWT access token
    const publicKey = await this.getKeycloakPublicKey();
    return { accessToken, payload: jwt.verify(accessToken, publicKey, { algorithms: ['RS256'] }) as JwtPayload };
  }
}
