import { Field, InputType } from '@nestjs/graphql';
import { OpportunityState } from './opportunity-state.enum';

@InputType()
export class EnumOpportunityStateFilter {
  @Field(() => OpportunityState, { nullable: true })
  equals?: keyof typeof OpportunityState;

  @Field(() => [OpportunityState], { nullable: true })
  in?: Array<keyof typeof OpportunityState>;

  @Field(() => [OpportunityState], { nullable: true })
  notIn?: Array<keyof typeof OpportunityState>;

  @Field(() => EnumOpportunityStateFilter, { nullable: true })
  not?: EnumOpportunityStateFilter;
}
