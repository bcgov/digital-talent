import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';

@ObjectType()
export class OpportunitySkillEntity {
  @Field((type) => GraphQLUUID)
  opportunity_id: string;

  @Field((type) => GraphQLUUID)
  skill_id: string;

  created_at: Date;

  deleted_at?: Date;
}
