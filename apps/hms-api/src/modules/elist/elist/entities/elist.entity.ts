import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';

@ObjectType()
export class ElistEntity {
  @Field((type) => GraphQLUUID)
  id: string;

  @Field((type) => GraphQLUUID)
  applicant_id: string;

  @Field((type) => GraphQLUUID)
  competition_id: string;

  rank: number;

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;
}
