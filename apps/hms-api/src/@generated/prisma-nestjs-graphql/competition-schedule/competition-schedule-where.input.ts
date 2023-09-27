import { Field, InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { EnumCompetitionStateFilter } from '../prisma/enum-competition-state-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { CompetitionRelationFilter } from '../competition/competition-relation-filter.input';

@InputType()
export class CompetitionScheduleWhereInput {
  @Field(() => [CompetitionScheduleWhereInput], { nullable: true })
  AND?: Array<CompetitionScheduleWhereInput>;

  @Field(() => [CompetitionScheduleWhereInput], { nullable: true })
  OR?: Array<CompetitionScheduleWhereInput>;

  @Field(() => [CompetitionScheduleWhereInput], { nullable: true })
  NOT?: Array<CompetitionScheduleWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  id?: UuidFilter;

  @Field(() => UuidFilter, { nullable: true })
  competition_id?: UuidFilter;

  @Field(() => EnumCompetitionStateFilter, { nullable: true })
  state?: EnumCompetitionStateFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  start_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  end_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  deleted_at?: DateTimeFilter;

  @Field(() => CompetitionRelationFilter, { nullable: true })
  competition?: CompetitionRelationFilter;
}
