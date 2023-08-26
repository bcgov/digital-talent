import { Field, InputType } from '@nestjs/graphql';
import { OpportunityState } from '@prisma/client';
import { IsEnum, IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';

@InputType()
export class UpdateOpportunityStateInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @Field((type) => OpportunityState)
  @IsEnum(OpportunityState)
  state: OpportunityState;
}
