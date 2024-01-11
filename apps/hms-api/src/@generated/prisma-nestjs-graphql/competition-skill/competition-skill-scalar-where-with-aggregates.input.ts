import { Field, InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class CompetitionSkillScalarWhereWithAggregatesInput {
  @Field(() => [CompetitionSkillScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<CompetitionSkillScalarWhereWithAggregatesInput>;

  @Field(() => [CompetitionSkillScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<CompetitionSkillScalarWhereWithAggregatesInput>;

  @Field(() => [CompetitionSkillScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<CompetitionSkillScalarWhereWithAggregatesInput>;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  competition_id?: UuidWithAggregatesFilter;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  skill_id?: UuidWithAggregatesFilter;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  min_years_experience?: IntWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  is_required?: BoolWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  created_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updated_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  deleted_at?: DateTimeWithAggregatesFilter;
}
