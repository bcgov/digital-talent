import { Field, InputType } from '@nestjs/graphql';
import { OpportunityState } from '../prisma/opportunity-state.enum';
import { OpportunityInvolvement } from '../prisma/opportunity-involvement.enum';
import { WorkOption } from '../prisma/work-option.enum';
import { OpportunitySkillCreateNestedManyWithoutOpportunityInput } from '../opportunity-skill/opportunity-skill-create-nested-many-without-opportunity.input';
import { OpportunityLocationCreateNestedManyWithoutOpportunityInput } from '../opportunity-location/opportunity-location-create-nested-many-without-opportunity.input';
import { CompetitionCreateNestedOneWithoutOpportunitiesInput } from '../competition/competition-create-nested-one-without-opportunities.input';
import { UserCreateNestedOneWithoutOpportunitiesInput } from '../user/user-create-nested-one-without-opportunities.input';
import { MinistryCreateNestedOneWithoutOpportunitiesInput } from '../ministry/ministry-create-nested-one-without-opportunities.input';
import { ElistOfferCreateNestedManyWithoutOpportunityInput } from '../elist-offer/elist-offer-create-nested-many-without-opportunity.input';

@InputType()
export class OpportunityCreateInput {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  deltek_id!: string;

  @Field(() => OpportunityState, { nullable: false })
  state!: keyof typeof OpportunityState;

  @Field(() => OpportunityInvolvement, { nullable: false })
  involvement!: keyof typeof OpportunityInvolvement;

  @Field(() => WorkOption, { nullable: false })
  work_option!: keyof typeof WorkOption;

  @Field(() => String, { nullable: false })
  description!: string;

  @Field(() => String, { nullable: false })
  candidate_description!: string;

  @Field(() => String, { nullable: false })
  team_name!: string;

  @Field(() => String, { nullable: false })
  team_description!: string;

  @Field(() => String, { nullable: false })
  work_examples!: string;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => OpportunitySkillCreateNestedManyWithoutOpportunityInput, { nullable: true })
  skills?: OpportunitySkillCreateNestedManyWithoutOpportunityInput;

  @Field(() => OpportunityLocationCreateNestedManyWithoutOpportunityInput, { nullable: true })
  locations?: OpportunityLocationCreateNestedManyWithoutOpportunityInput;

  @Field(() => CompetitionCreateNestedOneWithoutOpportunitiesInput, { nullable: false })
  competition!: CompetitionCreateNestedOneWithoutOpportunitiesInput;

  @Field(() => UserCreateNestedOneWithoutOpportunitiesInput, { nullable: false })
  hiring_manager!: UserCreateNestedOneWithoutOpportunitiesInput;

  @Field(() => MinistryCreateNestedOneWithoutOpportunitiesInput, { nullable: false })
  ministry!: MinistryCreateNestedOneWithoutOpportunitiesInput;

  @Field(() => ElistOfferCreateNestedManyWithoutOpportunityInput, { nullable: true })
  offers?: ElistOfferCreateNestedManyWithoutOpportunityInput;
}
