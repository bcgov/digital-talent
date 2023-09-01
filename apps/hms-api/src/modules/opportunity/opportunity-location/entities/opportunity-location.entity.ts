import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';

@ObjectType()
export class OpportunityLocationEntity {
  @Field((type) => GraphQLUUID)
  opportunity_id: string;

  @Field((type) => GraphQLUUID)
  location_id: string;

  created_at: Date;

  deleted_at?: Date;
}
