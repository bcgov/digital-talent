import { Field, InputType } from '@nestjs/graphql';
import { OpportunityInvolvement } from './opportunity-involvement.enum';
import { IntFilter } from './int-filter.input';
import { EnumOpportunityInvolvementFilter } from './enum-opportunity-involvement-filter.input';

@InputType()
export class EnumOpportunityInvolvementWithAggregatesFilter {
  @Field(() => OpportunityInvolvement, { nullable: true })
  equals?: keyof typeof OpportunityInvolvement;

  @Field(() => [OpportunityInvolvement], { nullable: true })
  in?: Array<keyof typeof OpportunityInvolvement>;

  @Field(() => [OpportunityInvolvement], { nullable: true })
  notIn?: Array<keyof typeof OpportunityInvolvement>;

  @Field(() => EnumOpportunityInvolvementWithAggregatesFilter, { nullable: true })
  not?: EnumOpportunityInvolvementWithAggregatesFilter;

  @Field(() => IntFilter, { nullable: true })
  _count?: IntFilter;

  @Field(() => EnumOpportunityInvolvementFilter, { nullable: true })
  _min?: EnumOpportunityInvolvementFilter;

  @Field(() => EnumOpportunityInvolvementFilter, { nullable: true })
  _max?: EnumOpportunityInvolvementFilter;
}
