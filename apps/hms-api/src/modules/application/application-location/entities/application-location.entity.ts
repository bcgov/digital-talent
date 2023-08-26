import { Field, Int, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';

@ObjectType()
export class ApplicationLocationEntity {
  @Field((type) => GraphQLUUID)
  application_id: string;

  @Field((type) => GraphQLUUID)
  location_id: string;

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;

  @Field(() => Int)
  rank: number;
}
