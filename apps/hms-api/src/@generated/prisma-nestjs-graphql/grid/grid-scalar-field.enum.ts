import { registerEnumType } from '@nestjs/graphql';

export enum GridScalarFieldEnum {
  id = 'id',
  name = 'name',
  steps = 'steps',
  created_at = 'created_at',
  updated_at = 'updated_at',
  deleted_at = 'deleted_at',
}

registerEnumType(GridScalarFieldEnum, { name: 'GridScalarFieldEnum', description: undefined });
