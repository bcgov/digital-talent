import { registerEnumType } from '@nestjs/graphql';

export enum OpportunityScalarFieldEnum {
  id = 'id',
  competition_id = 'competition_id',
  deltek_id = 'deltek_id',
  hiring_manager_id = 'hiring_manager_id',
  ministry_id = 'ministry_id',
  state = 'state',
  involvement = 'involvement',
  work_option = 'work_option',
  description = 'description',
  candidate_description = 'candidate_description',
  team_name = 'team_name',
  team_description = 'team_description',
  work_examples = 'work_examples',
  created_at = 'created_at',
  updated_at = 'updated_at',
  deleted_at = 'deleted_at',
}

registerEnumType(OpportunityScalarFieldEnum, { name: 'OpportunityScalarFieldEnum', description: undefined });
