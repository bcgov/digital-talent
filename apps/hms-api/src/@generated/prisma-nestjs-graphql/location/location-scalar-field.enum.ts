import { registerEnumType } from '@nestjs/graphql';

export enum LocationScalarFieldEnum {
  id = 'id',
  deltek_id = 'deltek_id',
  name = 'name',
  postal_code = 'postal_code',
  lat = 'lat',
  lon = 'lon',
  region = 'region',
  created_at = 'created_at',
  updated_at = 'updated_at',
  deleted_at = 'deleted_at',
}

registerEnumType(LocationScalarFieldEnum, { name: 'LocationScalarFieldEnum', description: undefined });
