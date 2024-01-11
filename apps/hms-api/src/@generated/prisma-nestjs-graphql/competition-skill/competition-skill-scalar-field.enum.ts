import { registerEnumType } from '@nestjs/graphql';

export enum CompetitionSkillScalarFieldEnum {
  competition_id = 'competition_id',
  skill_id = 'skill_id',
  min_years_experience = 'min_years_experience',
  is_required = 'is_required',
  created_at = 'created_at',
  updated_at = 'updated_at',
  deleted_at = 'deleted_at',
}

registerEnumType(CompetitionSkillScalarFieldEnum, { name: 'CompetitionSkillScalarFieldEnum', description: undefined });
