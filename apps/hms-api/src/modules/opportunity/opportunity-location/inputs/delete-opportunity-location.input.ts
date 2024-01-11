import { Field, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';

@InputType()
export class DeleteOpportunityLocationInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  opportunity_id: string;

  @Field((type) => GraphQLUUID)
  @IsUUID()
  location_id: string;
}
