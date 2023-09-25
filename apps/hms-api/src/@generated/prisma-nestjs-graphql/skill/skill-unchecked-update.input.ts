import { Field, InputType } from '@nestjs/graphql';
import { SkillCategory } from '../prisma/skill-category.enum';
import { ApplicationSkillUncheckedUpdateManyWithoutSkillNestedInput } from '../application-skill/application-skill-unchecked-update-many-without-skill-nested.input';
import { CompetitionSkillUncheckedUpdateManyWithoutSkillNestedInput } from '../competition-skill/competition-skill-unchecked-update-many-without-skill-nested.input';
import { OpportunitySkillUncheckedUpdateManyWithoutSkillNestedInput } from '../opportunity-skill/opportunity-skill-unchecked-update-many-without-skill-nested.input';

@InputType()
export class SkillUncheckedUpdateInput {
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

  @Field(() => ApplicationSkillUncheckedUpdateManyWithoutSkillNestedInput, { nullable: true })
  applications?: ApplicationSkillUncheckedUpdateManyWithoutSkillNestedInput;

  @Field(() => CompetitionSkillUncheckedUpdateManyWithoutSkillNestedInput, { nullable: true })
  competitions?: CompetitionSkillUncheckedUpdateManyWithoutSkillNestedInput;

  @Field(() => OpportunitySkillUncheckedUpdateManyWithoutSkillNestedInput, { nullable: true })
  OpportunitySkill?: OpportunitySkillUncheckedUpdateManyWithoutSkillNestedInput;
}
