import { Field, InputType } from '@nestjs/graphql';
import { OpportunityInvolvement } from './opportunity-involvement.enum';

@InputType()
export class EnumOpportunityInvolvementFilter {
  @Field(() => OpportunityInvolvement, { nullable: true })
  equals?: keyof typeof OpportunityInvolvement;

  @Field(() => [OpportunityInvolvement], { nullable: true })
  in?: Array<keyof typeof OpportunityInvolvement>;

  @Field(() => [OpportunityInvolvement], { nullable: true })
  notIn?: Array<keyof typeof OpportunityInvolvement>;

  @Field(() => EnumOpportunityInvolvementFilter, { nullable: true })
  not?: EnumOpportunityInvolvementFilter;
}
