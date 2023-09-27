import { Field, InputType } from '@nestjs/graphql';
import { OpportunityWhereInput } from './opportunity-where.input';

@InputType()
export class OpportunityRelationFilter {
  @Field(() => OpportunityWhereInput, { nullable: true })
  is?: OpportunityWhereInput;

  @Field(() => OpportunityWhereInput, { nullable: true })
  isNot?: OpportunityWhereInput;
}
