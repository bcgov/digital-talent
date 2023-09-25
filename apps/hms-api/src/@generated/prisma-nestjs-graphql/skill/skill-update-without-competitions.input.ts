import { Field, InputType } from '@nestjs/graphql';
import { SkillCategory } from '../prisma/skill-category.enum';
import { ApplicationSkillUpdateManyWithoutSkillNestedInput } from '../application-skill/application-skill-update-many-without-skill-nested.input';
import { OpportunitySkillUpdateManyWithoutSkillNestedInput } from '../opportunity-skill/opportunity-skill-update-many-without-skill-nested.input';

@InputType()
export class SkillUpdateWithoutCompetitionsInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => SkillCategory, { nullable: true })
  category?: keyof typeof SkillCategory;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => ApplicationSkillUpdateManyWithoutSkillNestedInput, { nullable: true })
  applications?: ApplicationSkillUpdateManyWithoutSkillNestedInput;

  @Field(() => OpportunitySkillUpdateManyWithoutSkillNestedInput, { nullable: true })
  OpportunitySkill?: OpportunitySkillUpdateManyWithoutSkillNestedInput;
}
