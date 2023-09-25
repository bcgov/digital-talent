import { registerEnumType } from '@nestjs/graphql';

export enum ApplicationScalarFieldEnum {
  id = 'id',
  applicant_id = 'applicant_id',
  created_at = 'created_at',
  updated_at = 'updated_at',
  deleted_at = 'deleted_at',
  json = 'json',
}

registerEnumType(ApplicationScalarFieldEnum, { name: 'ApplicationScalarFieldEnum', description: undefined });
