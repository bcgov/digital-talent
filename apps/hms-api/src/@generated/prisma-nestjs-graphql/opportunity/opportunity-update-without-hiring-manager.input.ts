import { Field, InputType } from '@nestjs/graphql';
import { OpportunityState } from '../prisma/opportunity-state.enum';
import { OpportunityInvolvement } from '../prisma/opportunity-involvement.enum';
import { WorkOption } from '../prisma/work-option.enum';
import { OpportunitySkillUpdateManyWithoutOpportunityNestedInput } from '../opportunity-skill/opportunity-skill-update-many-without-opportunity-nested.input';
import { OpportunityLocationUpdateManyWithoutOpportunityNestedInput } from '../opportunity-location/opportunity-location-update-many-without-opportunity-nested.input';
import { CompetitionUpdateOneRequiredWithoutOpportunitiesNestedInput } from '../competition/competition-update-one-required-without-opportunities-nested.input';
import { MinistryUpdateOneRequiredWithoutOpportunitiesNestedInput } from '../ministry/ministry-update-one-required-without-opportunities-nested.input';
import { ElistOfferUpdateManyWithoutOpportunityNestedInput } from '../elist-offer/elist-offer-update-many-without-opportunity-nested.input';

@InputType()
export class OpportunityUpdateWithoutHiring_managerInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  deltek_id?: string;

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

  @Field(() => OpportunitySkillUpdateManyWithoutOpportunityNestedInput, { nullable: true })
  skills?: OpportunitySkillUpdateManyWithoutOpportunityNestedInput;

  @Field(() => OpportunityLocationUpdateManyWithoutOpportunityNestedInput, { nullable: true })
  locations?: OpportunityLocationUpdateManyWithoutOpportunityNestedInput;

  @Field(() => CompetitionUpdateOneRequiredWithoutOpportunitiesNestedInput, { nullable: true })
  competition?: CompetitionUpdateOneRequiredWithoutOpportunitiesNestedInput;

  @Field(() => MinistryUpdateOneRequiredWithoutOpportunitiesNestedInput, { nullable: true })
  ministry?: MinistryUpdateOneRequiredWithoutOpportunitiesNestedInput;

  @Field(() => ElistOfferUpdateManyWithoutOpportunityNestedInput, { nullable: true })
  ElistOffer?: ElistOfferUpdateManyWithoutOpportunityNestedInput;
}
