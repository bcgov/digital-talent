import { registerEnumType } from '@nestjs/graphql';

export enum SkillScalarFieldEnum {
  id = 'id',
  category = 'category',
  name = 'name',
  description = 'description',
  created_at = 'created_at',
  updated_at = 'updated_at',
  deleted_at = 'deleted_at',
}

registerEnumType(SkillScalarFieldEnum, { name: 'SkillScalarFieldEnum', description: undefined });
