import { Field, InputType } from '@nestjs/graphql';
import { OpportunityState } from './opportunity-state.enum';
import { IntFilter } from './int-filter.input';
import { EnumOpportunityStateFilter } from './enum-opportunity-state-filter.input';

@InputType()
export class EnumOpportunityStateWithAggregatesFilter {
  @Field(() => OpportunityState, { nullable: true })
  equals?: keyof typeof OpportunityState;

  @Field(() => [OpportunityState], { nullable: true })
  in?: Array<keyof typeof OpportunityState>;

  @Field(() => [OpportunityState], { nullable: true })
  notIn?: Array<keyof typeof OpportunityState>;

  @Field(() => EnumOpportunityStateWithAggregatesFilter, { nullable: true })
  not?: EnumOpportunityStateWithAggregatesFilter;

  @Field(() => IntFilter, { nullable: true })
  _count?: IntFilter;

  @Field(() => EnumOpportunityStateFilter, { nullable: true })
  _min?: EnumOpportunityStateFilter;

  @Field(() => EnumOpportunityStateFilter, { nullable: true })
  _max?: EnumOpportunityStateFilter;
}
