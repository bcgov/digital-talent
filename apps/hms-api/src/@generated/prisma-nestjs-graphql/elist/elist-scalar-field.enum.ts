import { registerEnumType } from '@nestjs/graphql';

export enum ElistScalarFieldEnum {
  id = 'id',
  applicant_id = 'applicant_id',
  competition_id = 'competition_id',
  rank = 'rank',
  created_at = 'created_at',
  updated_at = 'updated_at',
  deleted_at = 'deleted_at',
}

registerEnumType(ElistScalarFieldEnum, { name: 'ElistScalarFieldEnum', description: undefined });
