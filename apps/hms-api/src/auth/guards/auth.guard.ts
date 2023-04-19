/* eslint-disable no-console */
import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard as PassportAuthGuard } from '@nestjs/passport';
import { PUBLIC_DECORATOR } from '../decorators/public.decorator';

@Injectable()
export class AuthGuard extends PassportAuthGuard('keycloak') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.get<boolean>(PUBLIC_DECORATOR, context.getHandler());
    if (isPublic) {
      // If this is a public route, let the user through
      return true;
    }
    return super.canActivate(context);
  }
}
