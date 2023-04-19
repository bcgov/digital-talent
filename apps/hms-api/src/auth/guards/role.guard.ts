/* eslint-disable no-console */
import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard as PassportAuthGuard } from '@nestjs/passport';
import { ROLES_DECORATOR } from '../decorators/roles.decorator';

@Injectable()
export class RoleGuard extends PassportAuthGuard('keycloak') {
  constructor(private reflector: Reflector) {
    super();
  }

  private matchRoles(roles: string[], userRoles: string[]) {
    return roles.filter((r) => userRoles.includes(r)).length > 0;
  }

  canActivate(context: ExecutionContext) {
    const roles = this.reflector.get<string[]>(ROLES_DECORATOR, context.getHandler());
    if (!roles) {
      // If there are no roles defined on the route, let the user through
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const { user } = request;

    return this.matchRoles(roles, user.roles);
  }
}
