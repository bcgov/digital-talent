import { Field, InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumCompetitionCategoryFilter } from '../prisma/enum-competition-category-filter.input';
import { EnumCompetitionStateFilter } from '../prisma/enum-competition-state-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CompetitionScalarWhereInput {
  @Field(() => [CompetitionScalarWhereInput], { nullable: true })
  AND?: Array<CompetitionScalarWhereInput>;

  @Field(() => [CompetitionScalarWhereInput], { nullable: true })
  OR?: Array<CompetitionScalarWhereInput>;

  @Field(() => [CompetitionScalarWhereInput], { nullable: true })
  NOT?: Array<CompetitionScalarWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  id?: UuidFilter;

  @Field(() => StringFilter, { nullable: true })
  deltek_id?: StringFilter;

  @Field(() => UuidFilter, { nullable: true })
  job_description_id?: UuidFilter;

  @Field(() => UuidFilter, { nullable: true })
  recruiter_id?: UuidFilter;

  @Field(() => EnumCompetitionCategoryFilter, { nullable: true })
  category?: EnumCompetitionCategoryFilter;

  @Field(() => EnumCompetitionStateFilter, { nullable: true })
  state?: EnumCompetitionStateFilter;

  @Field(() => JsonFilter, { nullable: true })
  metadata?: JsonFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  deleted_at?: DateTimeFilter;
}
