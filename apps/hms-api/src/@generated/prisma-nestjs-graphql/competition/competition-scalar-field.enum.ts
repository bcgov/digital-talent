import { registerEnumType } from '@nestjs/graphql';

export enum CompetitionScalarFieldEnum {
  id = 'id',
  deltek_id = 'deltek_id',
  job_description_id = 'job_description_id',
  recruiter_id = 'recruiter_id',
  category = 'category',
  state = 'state',
  metadata = 'metadata',
  created_at = 'created_at',
  updated_at = 'updated_at',
  deleted_at = 'deleted_at',
}

registerEnumType(CompetitionScalarFieldEnum, { name: 'CompetitionScalarFieldEnum', description: undefined });
