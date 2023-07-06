import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';

@ObjectType()
export class CityEntity {
  @Field((type) => GraphQLUUID)
  id: string;

  region_id?: string;

  deltek_id?: string;

  name?: string;

  postal_code?: string;

  lat?: number;

  lon?: number;

  created_at?: Date;

  updated_at?: Date;
}
