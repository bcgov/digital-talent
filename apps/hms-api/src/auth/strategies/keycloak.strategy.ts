/* eslint-disable camelcase */
/* eslint-disable no-console */

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import jwt, { JwtPayload } from 'jsonwebtoken';
import Strategy from 'passport-http-bearer';
import { AuthService } from '../auth.service';

@Injectable()
export class KeycloakStrategy extends PassportStrategy(Strategy, 'keycloak') {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(payload: any, done: (err, user) => void) {
    const publicKey = await this.authService.getKeycloakRealmPublicKey();
    try {
      const data = jwt.verify(payload, publicKey, { ignoreExpiration: false }) as JwtPayload;
      const { preferred_username, name, client_roles } = data;

      done(null, { id: preferred_username, name, roles: client_roles });
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        throw new UnauthorizedException();
      }
      console.log('error: ', error);
    }
  }
}
