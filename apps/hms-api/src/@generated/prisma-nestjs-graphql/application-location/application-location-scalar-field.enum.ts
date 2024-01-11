import { registerEnumType } from '@nestjs/graphql';

export enum ApplicationLocationScalarFieldEnum {
  application_id = 'application_id',
  location_id = 'location_id',
  rank = 'rank',
  created_at = 'created_at',
  updated_at = 'updated_at',
  deleted_at = 'deleted_at',
}

registerEnumType(ApplicationLocationScalarFieldEnum, {
  name: 'ApplicationLocationScalarFieldEnum',
  description: undefined,
});
