import { registerEnumType } from '@nestjs/graphql';

export enum ClassificationScalarFieldEnum {
  id = 'id',
  grid_id = 'grid_id',
  occupation_group_id = 'occupation_group_id',
  rate_adjustment = 'rate_adjustment',
  created_at = 'created_at',
  updated_at = 'updated_at',
  deleted_at = 'deleted_at',
}

registerEnumType(ClassificationScalarFieldEnum, { name: 'ClassificationScalarFieldEnum', description: undefined });
