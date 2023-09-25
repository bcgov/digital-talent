import { Field, InputType } from '@nestjs/graphql';
import { OpportunityWhereInput } from './opportunity-where.input';

@InputType()
export class OpportunityListRelationFilter {
  @Field(() => OpportunityWhereInput, { nullable: true })
  every?: OpportunityWhereInput;

  @Field(() => OpportunityWhereInput, { nullable: true })
  some?: OpportunityWhereInput;

  @Field(() => OpportunityWhereInput, { nullable: true })
  none?: OpportunityWhereInput;
}
