import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';

@ObjectType()
export class ProvinceEntity {
  @Field((type) => GraphQLUUID)
  id: string;

  country_id?: string;

  deltek_id?: string;

  name?: string;

  code?: string;

  created_at?: Date;

  updated_at?: Date;
}
