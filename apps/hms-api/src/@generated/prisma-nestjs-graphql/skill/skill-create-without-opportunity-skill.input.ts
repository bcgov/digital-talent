import { Field, InputType } from '@nestjs/graphql';
import { SkillCategory } from '../prisma/skill-category.enum';
import { ApplicationSkillCreateNestedManyWithoutSkillInput } from '../application-skill/application-skill-create-nested-many-without-skill.input';
import { CompetitionSkillCreateNestedManyWithoutSkillInput } from '../competition-skill/competition-skill-create-nested-many-without-skill.input';

@InputType()
export class SkillCreateWithoutOpportunitySkillInput {
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

  @Field(() => ApplicationSkillCreateNestedManyWithoutSkillInput, { nullable: true })
  applications?: ApplicationSkillCreateNestedManyWithoutSkillInput;

  @Field(() => CompetitionSkillCreateNestedManyWithoutSkillInput, { nullable: true })
  competitions?: CompetitionSkillCreateNestedManyWithoutSkillInput;
}
