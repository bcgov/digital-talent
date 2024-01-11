import { Field, InputType } from '@nestjs/graphql';
import { SkillCategory } from './skill-category.enum';

@InputType()
export class EnumSkillCategoryFilter {
  @Field(() => SkillCategory, { nullable: true })
  equals?: keyof typeof SkillCategory;

  @Field(() => [SkillCategory], { nullable: true })
  in?: Array<keyof typeof SkillCategory>;

  @Field(() => [SkillCategory], { nullable: true })
  notIn?: Array<keyof typeof SkillCategory>;

  @Field(() => EnumSkillCategoryFilter, { nullable: true })
  not?: EnumSkillCategoryFilter;
}
