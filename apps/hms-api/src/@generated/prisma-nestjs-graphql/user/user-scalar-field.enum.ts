import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
  id = 'id',
  deltek_id = 'deltek_id',
  name = 'name',
  email = 'email',
  roles = 'roles',
  created_at = 'created_at',
  updated_at = 'updated_at',
  deleted_at = 'deleted_at',
}

registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined });
