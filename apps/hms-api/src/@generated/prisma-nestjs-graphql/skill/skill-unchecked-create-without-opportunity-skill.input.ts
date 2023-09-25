import { Field, InputType } from '@nestjs/graphql';
import { SkillCategory } from '../prisma/skill-category.enum';
import { ApplicationSkillUncheckedCreateNestedManyWithoutSkillInput } from '../application-skill/application-skill-unchecked-create-nested-many-without-skill.input';
import { CompetitionSkillUncheckedCreateNestedManyWithoutSkillInput } from '../competition-skill/competition-skill-unchecked-create-nested-many-without-skill.input';

@InputType()
export class SkillUncheckedCreateWithoutOpportunitySkillInput {
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

  @Field(() => ApplicationSkillUncheckedCreateNestedManyWithoutSkillInput, { nullable: true })
  applications?: ApplicationSkillUncheckedCreateNestedManyWithoutSkillInput;

  @Field(() => CompetitionSkillUncheckedCreateNestedManyWithoutSkillInput, { nullable: true })
  competitions?: CompetitionSkillUncheckedCreateNestedManyWithoutSkillInput;
}
