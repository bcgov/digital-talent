import { Field, InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { EnumCompetitionStateWithAggregatesFilter } from '../prisma/enum-competition-state-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class CompetitionScheduleScalarWhereWithAggregatesInput {
  @Field(() => [CompetitionScheduleScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<CompetitionScheduleScalarWhereWithAggregatesInput>;

  @Field(() => [CompetitionScheduleScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<CompetitionScheduleScalarWhereWithAggregatesInput>;

  @Field(() => [CompetitionScheduleScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<CompetitionScheduleScalarWhereWithAggregatesInput>;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  id?: UuidWithAggregatesFilter;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  competition_id?: UuidWithAggregatesFilter;

  @Field(() => EnumCompetitionStateWithAggregatesFilter, { nullable: true })
  state?: EnumCompetitionStateWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  start_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  end_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  created_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updated_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  deleted_at?: DateTimeWithAggregatesFilter;
}
