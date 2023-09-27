import { Field, InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumOpportunityStateWithAggregatesFilter } from '../prisma/enum-opportunity-state-with-aggregates-filter.input';
import { EnumOpportunityInvolvementWithAggregatesFilter } from '../prisma/enum-opportunity-involvement-with-aggregates-filter.input';
import { EnumWorkOptionWithAggregatesFilter } from '../prisma/enum-work-option-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class OpportunityScalarWhereWithAggregatesInput {
  @Field(() => [OpportunityScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<OpportunityScalarWhereWithAggregatesInput>;

  @Field(() => [OpportunityScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<OpportunityScalarWhereWithAggregatesInput>;

  @Field(() => [OpportunityScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<OpportunityScalarWhereWithAggregatesInput>;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  id?: UuidWithAggregatesFilter;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  competition_id?: UuidWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  deltek_id?: StringWithAggregatesFilter;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  hiring_manager_id?: UuidWithAggregatesFilter;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  ministry_id?: UuidWithAggregatesFilter;

  @Field(() => EnumOpportunityStateWithAggregatesFilter, { nullable: true })
  state?: EnumOpportunityStateWithAggregatesFilter;

  @Field(() => EnumOpportunityInvolvementWithAggregatesFilter, { nullable: true })
  involvement?: EnumOpportunityInvolvementWithAggregatesFilter;

  @Field(() => EnumWorkOptionWithAggregatesFilter, { nullable: true })
  work_option?: EnumWorkOptionWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  description?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  candidate_description?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  team_name?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  team_description?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  work_examples?: StringWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  created_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updated_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  deleted_at?: DateTimeWithAggregatesFilter;
}
