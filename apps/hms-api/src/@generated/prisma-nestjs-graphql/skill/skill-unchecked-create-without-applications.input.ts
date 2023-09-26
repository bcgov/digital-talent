import { Field, InputType } from '@nestjs/graphql';
import { SkillCategory } from '../prisma/skill-category.enum';
import { CompetitionSkillUncheckedCreateNestedManyWithoutSkillInput } from '../competition-skill/competition-skill-unchecked-create-nested-many-without-skill.input';
import { OpportunitySkillUncheckedCreateNestedManyWithoutSkillInput } from '../opportunity-skill/opportunity-skill-unchecked-create-nested-many-without-skill.input';

@InputType()
export class SkillUncheckedCreateWithoutApplicationsInput {
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

  @Field(() => CompetitionSkillUncheckedCreateNestedManyWithoutSkillInput, { nullable: true })
  competitions?: CompetitionSkillUncheckedCreateNestedManyWithoutSkillInput;

  @Field(() => OpportunitySkillUncheckedCreateNestedManyWithoutSkillInput, { nullable: true })
  opportunities?: OpportunitySkillUncheckedCreateNestedManyWithoutSkillInput;
}
