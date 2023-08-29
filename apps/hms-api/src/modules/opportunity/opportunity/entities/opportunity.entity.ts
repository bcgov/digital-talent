import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { OpportunityInvolvement, OpportunityState, WorkOption } from '@prisma/client';
import { GraphQLUUID } from 'graphql-scalars';

registerEnumType(OpportunityInvolvement, {
  name: 'OpportunityInvolvement',
  description: 'The competition categories',
});

registerEnumType(WorkOption, {
  name: 'WorkOption',
  description: 'The opportunity work options',
});

registerEnumType(OpportunityState, {
  name: 'OpportunityState',
  description: 'The opportunity work options',
});

@ObjectType()
export class OpportunityEntity {
  @Field((type) => GraphQLUUID)
  id: string;

  @Field((type) => GraphQLUUID)
  competition_id: string;

  deltek_id?: string;

  @Field((type) => GraphQLUUID)
  hiring_manager_id?: string;

  @Field((type) => GraphQLUUID)
  ministry_id?: string;

  @Field((type) => OpportunityState)
  state: OpportunityState;

  @Field((type) => OpportunityInvolvement)
  involvement: OpportunityInvolvement;

  @Field((type) => WorkOption)
  work_option: WorkOption;

  description: string;

  candidate_description: string;

  team_name: string;

  team_description: string;

  work_examples: string;

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;
}