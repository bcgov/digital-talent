import { registerEnumType } from '@nestjs/graphql';

export enum JobDescriptionScalarFieldEnum {
  id = 'id',
  classification_id = 'classification_id',
  e_class_id = 'e_class_id',
  name = 'name',
  created_at = 'created_at',
  updated_at = 'updated_at',
  deleted_at = 'deleted_at',
}

registerEnumType(JobDescriptionScalarFieldEnum, { name: 'JobDescriptionScalarFieldEnum', description: undefined });
