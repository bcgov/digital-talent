import { registerEnumType } from '@nestjs/graphql';

export enum ApplicationSkillScalarFieldEnum {
  application_id = 'application_id',
  skill_id = 'skill_id',
  years_experience = 'years_experience',
  description = 'description',
  created_at = 'created_at',
  updated_at = 'updated_at',
  deleted_at = 'deleted_at',
}

registerEnumType(ApplicationSkillScalarFieldEnum, { name: 'ApplicationSkillScalarFieldEnum', description: undefined });
