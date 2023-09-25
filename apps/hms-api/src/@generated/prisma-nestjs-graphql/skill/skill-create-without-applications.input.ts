import { Field, InputType } from '@nestjs/graphql';
import { SkillCategory } from '../prisma/skill-category.enum';
import { CompetitionSkillCreateNestedManyWithoutSkillInput } from '../competition-skill/competition-skill-create-nested-many-without-skill.input';
import { OpportunitySkillCreateNestedManyWithoutSkillInput } from '../opportunity-skill/opportunity-skill-create-nested-many-without-skill.input';

@InputType()
export class SkillCreateWithoutApplicationsInput {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => SkillCategory, { nullable: false })
  category!: keyof typeof SkillCategory;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => CompetitionSkillCreateNestedManyWithoutSkillInput, { nullable: true })
  competitions?: CompetitionSkillCreateNestedManyWithoutSkillInput;

  @Field(() => OpportunitySkillCreateNestedManyWithoutSkillInput, { nullable: true })
  OpportunitySkill?: OpportunitySkillCreateNestedManyWithoutSkillInput;
}
