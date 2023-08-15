import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';

@ObjectType()
export class LocationEntity {
  @Field((type) => GraphQLUUID)
  id: string;

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;

  deltek_id: string;

  name: string;

  postal_code: string;

  lat: number;

  lon: number;
}
