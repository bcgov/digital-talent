import { Field, InputType } from '@nestjs/graphql';
import { SkillCategory } from './skill-category.enum';
import { IntFilter } from './int-filter.input';
import { EnumSkillCategoryFilter } from './enum-skill-category-filter.input';

@InputType()
export class EnumSkillCategoryWithAggregatesFilter {
  @Field(() => SkillCategory, { nullable: true })
  equals?: keyof typeof SkillCategory;

  @Field(() => [SkillCategory], { nullable: true })
  in?: Array<keyof typeof SkillCategory>;

  @Field(() => [SkillCategory], { nullable: true })
  notIn?: Array<keyof typeof SkillCategory>;

  @Field(() => EnumSkillCategoryWithAggregatesFilter, { nullable: true })
  not?: EnumSkillCategoryWithAggregatesFilter;

  @Field(() => IntFilter, { nullable: true })
  _count?: IntFilter;

  @Field(() => EnumSkillCategoryFilter, { nullable: true })
  _min?: EnumSkillCategoryFilter;

  @Field(() => EnumSkillCategoryFilter, { nullable: true })
  _max?: EnumSkillCategoryFilter;
}
