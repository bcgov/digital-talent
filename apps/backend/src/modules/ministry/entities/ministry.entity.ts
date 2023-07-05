import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';

@ObjectType()
export class MinistryEntity {
  @Field((type) => GraphQLUUID)
  id: string;

  deltek_id?: string;

  name?: string;

  created_at?: Date;

  updated_at?: Date;
}
