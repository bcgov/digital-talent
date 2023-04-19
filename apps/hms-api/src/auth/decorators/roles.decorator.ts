import { SetMetadata } from '@nestjs/common';

export const ROLES_DECORATOR = 'roles';

export enum RoleMatchingMode {
  ALL = 'all',
  ANY = 'any',
}

export const Roles = (...args: string[]) => SetMetadata(ROLES_DECORATOR, args);
