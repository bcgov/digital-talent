import { Field, InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { EnumSkillCategoryWithAggregatesFilter } from '../prisma/enum-skill-category-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class SkillScalarWhereWithAggregatesInput {
  @Field(() => [SkillScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<SkillScalarWhereWithAggregatesInput>;

  @Field(() => [SkillScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<SkillScalarWhereWithAggregatesInput>;

  @Field(() => [SkillScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<SkillScalarWhereWithAggregatesInput>;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  id?: UuidWithAggregatesFilter;

  @Field(() => EnumSkillCategoryWithAggregatesFilter, { nullable: true })
  category?: EnumSkillCategoryWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  description?: StringWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  created_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updated_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  deleted_at?: DateTimeWithAggregatesFilter;
}
