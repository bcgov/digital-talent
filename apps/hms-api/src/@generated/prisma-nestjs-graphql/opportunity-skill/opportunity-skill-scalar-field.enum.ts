import { registerEnumType } from '@nestjs/graphql';

export enum OpportunitySkillScalarFieldEnum {
  opportunity_id = 'opportunity_id',
  skill_id = 'skill_id',
  created_at = 'created_at',
  deleted_at = 'deleted_at',
  opportunityId = 'opportunityId',
}

registerEnumType(OpportunitySkillScalarFieldEnum, { name: 'OpportunitySkillScalarFieldEnum', description: undefined });
