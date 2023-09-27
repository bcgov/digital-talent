import { Field, InputType } from '@nestjs/graphql';
import { IsEnum, IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';
import { OpportunityState } from '../../../../@generated/prisma-nestjs-graphql';

@InputType()
export class UpdateOpportunityStateInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @Field((type) => OpportunityState)
  @IsEnum(OpportunityState)
  state: OpportunityState;
}
