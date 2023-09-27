import { Field, InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumCompetitionCategoryWithAggregatesFilter } from '../prisma/enum-competition-category-with-aggregates-filter.input';
import { EnumCompetitionStateWithAggregatesFilter } from '../prisma/enum-competition-state-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class CompetitionScalarWhereWithAggregatesInput {
  @Field(() => [CompetitionScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<CompetitionScalarWhereWithAggregatesInput>;

  @Field(() => [CompetitionScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<CompetitionScalarWhereWithAggregatesInput>;

  @Field(() => [CompetitionScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<CompetitionScalarWhereWithAggregatesInput>;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  id?: UuidWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  deltek_id?: StringWithAggregatesFilter;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  job_description_id?: UuidWithAggregatesFilter;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  recruiter_id?: UuidWithAggregatesFilter;

  @Field(() => EnumCompetitionCategoryWithAggregatesFilter, { nullable: true })
  category?: EnumCompetitionCategoryWithAggregatesFilter;

  @Field(() => EnumCompetitionStateWithAggregatesFilter, { nullable: true })
  state?: EnumCompetitionStateWithAggregatesFilter;

  @Field(() => JsonWithAggregatesFilter, { nullable: true })
  metadata?: JsonWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  created_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updated_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  deleted_at?: DateTimeWithAggregatesFilter;
}
