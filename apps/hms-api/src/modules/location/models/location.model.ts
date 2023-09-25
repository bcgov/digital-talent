import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { LocationRegion } from '../../../@generated/prisma-nestjs-graphql';

// registerEnumType(LocationRegion, {
//   name: 'LocationRegion',
// });

export interface ILocationModel {
  id: string;
  deltek_id: string;
  name: string;
  postal_code: string;
  lat: number;
  lon: number;
  region: LocationRegion;
}

@ObjectType()
export class LocationModel implements ILocationModel {
  @Field((type) => GraphQLUUID)
  id: string;

  deltek_id: string;

  name: string;

  postal_code: string;

  lat: number;

  lon: number;

  @Field((type) => LocationRegion)
  region: LocationRegion;

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;
}
