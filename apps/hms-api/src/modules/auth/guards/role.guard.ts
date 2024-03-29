import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard as PassportAuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { ROLES } from '../decorators/roles.decorator';

@Injectable()
export class RoleGuard extends PassportAuthGuard('keycloak') {
  constructor(private readonly reflector: Reflector) {
    super();
  }

  private userHasRoles(user: Express.User, roles: string[]) {
    return roles.filter((r) => user.roles.includes(r)).length > 0;
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<string[]>(ROLES, context.getHandler());
    if (!roles) return true;

    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;
    const { user } = request;

    return this.userHasRoles(user, roles);
  }
}
