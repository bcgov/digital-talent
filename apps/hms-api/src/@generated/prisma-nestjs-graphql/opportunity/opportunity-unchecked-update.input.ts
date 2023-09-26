import { Field, InputType } from '@nestjs/graphql';
import { OpportunityState } from '../prisma/opportunity-state.enum';
import { OpportunityInvolvement } from '../prisma/opportunity-involvement.enum';
import { WorkOption } from '../prisma/work-option.enum';
import { OpportunitySkillUncheckedUpdateManyWithoutOpportunityNestedInput } from '../opportunity-skill/opportunity-skill-unchecked-update-many-without-opportunity-nested.input';
import { OpportunityLocationUncheckedUpdateManyWithoutOpportunityNestedInput } from '../opportunity-location/opportunity-location-unchecked-update-many-without-opportunity-nested.input';
import { ElistOfferUncheckedUpdateManyWithoutOpportunityNestedInput } from '../elist-offer/elist-offer-unchecked-update-many-without-opportunity-nested.input';

@InputType()
export class OpportunityUncheckedUpdateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  competition_id?: string;

  @Field(() => String, { nullable: true })
  deltek_id?: string;

  @Field(() => String, { nullable: true })
  hiring_manager_id?: string;

  @Field(() => String, { nullable: true })
  ministry_id?: string;

  @Field(() => OpportunityState, { nullable: true })
  state?: keyof typeof OpportunityState;

  @Field(() => OpportunityInvolvement, { nullable: true })
  involvement?: keyof typeof OpportunityInvolvement;

  @Field(() => WorkOption, { nullable: true })
  work_option?: keyof typeof WorkOption;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  candidate_description?: string;

  @Field(() => String, { nullable: true })
  team_name?: string;

  @Field(() => String, { nullable: true })
  team_description?: string;

  @Field(() => String, { nullable: true })
  work_examples?: string;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => OpportunitySkillUncheckedUpdateManyWithoutOpportunityNestedInput, { nullable: true })
  skills?: OpportunitySkillUncheckedUpdateManyWithoutOpportunityNestedInput;

  @Field(() => OpportunityLocationUncheckedUpdateManyWithoutOpportunityNestedInput, { nullable: true })
  locations?: OpportunityLocationUncheckedUpdateManyWithoutOpportunityNestedInput;

  @Field(() => ElistOfferUncheckedUpdateManyWithoutOpportunityNestedInput, { nullable: true })
  offers?: ElistOfferUncheckedUpdateManyWithoutOpportunityNestedInput;
}
