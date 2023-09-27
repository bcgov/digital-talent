import { Field, InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CompetitionSkillScalarWhereInput {
  @Field(() => [CompetitionSkillScalarWhereInput], { nullable: true })
  AND?: Array<CompetitionSkillScalarWhereInput>;

  @Field(() => [CompetitionSkillScalarWhereInput], { nullable: true })
  OR?: Array<CompetitionSkillScalarWhereInput>;

  @Field(() => [CompetitionSkillScalarWhereInput], { nullable: true })
  NOT?: Array<CompetitionSkillScalarWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  competition_id?: UuidFilter;

  @Field(() => UuidFilter, { nullable: true })
  skill_id?: UuidFilter;

  @Field(() => IntFilter, { nullable: true })
  min_years_experience?: IntFilter;

  @Field(() => BoolFilter, { nullable: true })
  is_required?: BoolFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  deleted_at?: DateTimeFilter;
}
