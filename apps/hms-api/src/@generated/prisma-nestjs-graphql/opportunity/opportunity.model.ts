import { Field, ObjectType, ID } from '@nestjs/graphql';
import { OpportunityState } from '../prisma/opportunity-state.enum';
import { OpportunityInvolvement } from '../prisma/opportunity-involvement.enum';
import { WorkOption } from '../prisma/work-option.enum';
import { OpportunitySkill } from '../opportunity-skill/opportunity-skill.model';
import { OpportunityLocation } from '../opportunity-location/opportunity-location.model';
import { Competition } from '../competition/competition.model';
import { User } from '../user/user.model';
import { Ministry } from '../ministry/ministry.model';
import { ElistOffer } from '../elist-offer/elist-offer.model';

@ObjectType()
export class Opportunity {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  competition_id!: string;

  @Field(() => String, { nullable: false })
  deltek_id!: string;

  @Field(() => String, { nullable: false })
  hiring_manager_id!: string;

  @Field(() => String, { nullable: false })
  ministry_id!: string;

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
  created_at!: Date;

  @Field(() => Date, { nullable: true })
  updated_at!: Date | null;

  @Field(() => Date, { nullable: true })
  deleted_at!: Date | null;

  @Field(() => [OpportunitySkill], { nullable: true })
  skills?: Array<OpportunitySkill>;

  @Field(() => [OpportunityLocation], { nullable: true })
  locations?: Array<OpportunityLocation>;

  @Field(() => Competition, { nullable: false })
  competition?: Competition;

  @Field(() => User, { nullable: false })
  hiring_manager?: User;

  @Field(() => Ministry, { nullable: false })
  ministry?: Ministry;

  @Field(() => [ElistOffer], { nullable: true })
  ElistOffer?: Array<ElistOffer>;
}
