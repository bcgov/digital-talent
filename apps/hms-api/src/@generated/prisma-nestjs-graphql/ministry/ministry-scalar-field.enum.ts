import { registerEnumType } from '@nestjs/graphql';

export enum MinistryScalarFieldEnum {
  id = 'id',
  deltek_id = 'deltek_id',
  name = 'name',
  created_at = 'created_at',
  updated_at = 'updated_at',
  deleted_at = 'deleted_at',
}

registerEnumType(MinistryScalarFieldEnum, { name: 'MinistryScalarFieldEnum', description: undefined });
