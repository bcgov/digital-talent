import { Field, InputType } from '@nestjs/graphql';
import { OpportunityWhereInput } from './opportunity-where.input';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumOpportunityStateFilter } from '../prisma/enum-opportunity-state-filter.input';
import { EnumOpportunityInvolvementFilter } from '../prisma/enum-opportunity-involvement-filter.input';
import { EnumWorkOptionFilter } from '../prisma/enum-work-option-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { OpportunitySkillListRelationFilter } from '../opportunity-skill/opportunity-skill-list-relation-filter.input';
import { OpportunityLocationListRelationFilter } from '../opportunity-location/opportunity-location-list-relation-filter.input';
import { CompetitionRelationFilter } from '../competition/competition-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { MinistryRelationFilter } from '../ministry/ministry-relation-filter.input';
import { ElistOfferListRelationFilter } from '../elist-offer/elist-offer-list-relation-filter.input';

@InputType()
export class OpportunityWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => [OpportunityWhereInput], { nullable: true })
  AND?: Array<OpportunityWhereInput>;

  @Field(() => [OpportunityWhereInput], { nullable: true })
  OR?: Array<OpportunityWhereInput>;

  @Field(() => [OpportunityWhereInput], { nullable: true })
  NOT?: Array<OpportunityWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  competition_id?: UuidFilter;

  @Field(() => StringFilter, { nullable: true })
  deltek_id?: StringFilter;

  @Field(() => UuidFilter, { nullable: true })
  hiring_manager_id?: UuidFilter;

  @Field(() => UuidFilter, { nullable: true })
  ministry_id?: UuidFilter;

  @Field(() => EnumOpportunityStateFilter, { nullable: true })
  state?: EnumOpportunityStateFilter;

  @Field(() => EnumOpportunityInvolvementFilter, { nullable: true })
  involvement?: EnumOpportunityInvolvementFilter;

  @Field(() => EnumWorkOptionFilter, { nullable: true })
  work_option?: EnumWorkOptionFilter;

  @Field(() => StringFilter, { nullable: true })
  description?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  candidate_description?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  team_name?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  team_description?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  work_examples?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  deleted_at?: DateTimeFilter;

  @Field(() => OpportunitySkillListRelationFilter, { nullable: true })
  skills?: OpportunitySkillListRelationFilter;

  @Field(() => OpportunityLocationListRelationFilter, { nullable: true })
  locations?: OpportunityLocationListRelationFilter;

  @Field(() => CompetitionRelationFilter, { nullable: true })
  competition?: CompetitionRelationFilter;

  @Field(() => UserRelationFilter, { nullable: true })
  hiring_manager?: UserRelationFilter;

  @Field(() => MinistryRelationFilter, { nullable: true })
  ministry?: MinistryRelationFilter;

  @Field(() => ElistOfferListRelationFilter, { nullable: true })
  offers?: ElistOfferListRelationFilter;
}
