import { Field, InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { EnumCompetitionStateFilter } from '../prisma/enum-competition-state-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CompetitionScheduleScalarWhereInput {
  @Field(() => [CompetitionScheduleScalarWhereInput], { nullable: true })
  AND?: Array<CompetitionScheduleScalarWhereInput>;

  @Field(() => [CompetitionScheduleScalarWhereInput], { nullable: true })
  OR?: Array<CompetitionScheduleScalarWhereInput>;

  @Field(() => [CompetitionScheduleScalarWhereInput], { nullable: true })
  NOT?: Array<CompetitionScheduleScalarWhereInput>;

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
}
