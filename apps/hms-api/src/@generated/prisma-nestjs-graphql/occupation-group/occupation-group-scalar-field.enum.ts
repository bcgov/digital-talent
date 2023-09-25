import { registerEnumType } from '@nestjs/graphql';

export enum OccupationGroupScalarFieldEnum {
  id = 'id',
  code = 'code',
  name = 'name',
  created_at = 'created_at',
  updated_at = 'updated_at',
  deleted_at = 'deleted_at',
}

registerEnumType(OccupationGroupScalarFieldEnum, { name: 'OccupationGroupScalarFieldEnum', description: undefined });
