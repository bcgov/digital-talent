/* eslint-disable camelcase */
/* eslint-disable no-console */

import { CACHE_MANAGER, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { User } from '@prisma/client';
import { Cache } from 'cache-manager';
import jwt, { JwtPayload } from 'jsonwebtoken';
import Strategy from 'passport-http-bearer';
import { PrismaService } from '../../services/prisma/prisma.service';
import { CACHE_USER_PREFIX } from '../auth.constants';
import { AuthService } from '../auth.service';

@Injectable()
export class KeycloakStrategy extends PassportStrategy(Strategy, 'keycloak') {
  constructor(
    private readonly authService: AuthService,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    private readonly prisma: PrismaService,
  ) {
    super();
  }

  private async syncUserInDatabase(data: JwtPayload) {
    const user = await this.prisma.user.upsert({
      where: {
        idir_id: data.preferred_username,
      },
      update: {
        name: data.name,
        roles: data.client_roles,
      },
      create: {
        idir_id: data.preferred_username,
        name: data.name,
        roles: data.client_roles,
      },
    });

    return user;
  }

  private async getUserFromCache(data: JwtPayload) {
    // Check if user exists in cache
    const CACHE_KEY = `${CACHE_USER_PREFIX}${data.preferred_username}`;
    let match = await this.cacheManager.get<User>(CACHE_KEY);

    // If not, sync user in database & update the cache
    if (!match) {
      const user = await this.syncUserInDatabase(data);

      // Save user in cache, and expire when the JwtPayload expires
      await this.cacheManager.set(CACHE_KEY, user, (data.exp ?? 0) * 1000 - Date.now());

      // get newly cached value
      match = await this.cacheManager.get<User>(CACHE_KEY);
    }

    // Return cached user
    return match;
  }

  async validate(payload: any, done: (err, user) => void) {
    const publicKey = await this.authService.getKeycloakRealmPublicKey();
    try {
      const data = jwt.verify(payload, publicKey, { ignoreExpiration: false }) as JwtPayload;
      const user = await this.getUserFromCache(data);

      done(null, user);
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        throw new UnauthorizedException();
      }
      throw error;
    }
  }
}
