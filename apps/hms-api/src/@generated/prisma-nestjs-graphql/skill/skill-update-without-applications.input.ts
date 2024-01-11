import { Field, InputType } from '@nestjs/graphql';
import { SkillCategory } from '../prisma/skill-category.enum';
import { CompetitionSkillUpdateManyWithoutSkillNestedInput } from '../competition-skill/competition-skill-update-many-without-skill-nested.input';
import { OpportunitySkillUpdateManyWithoutSkillNestedInput } from '../opportunity-skill/opportunity-skill-update-many-without-skill-nested.input';

@InputType()
export class SkillUpdateWithoutApplicationsInput {
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

  @Field(() => CompetitionSkillUpdateManyWithoutSkillNestedInput, { nullable: true })
  competitions?: CompetitionSkillUpdateManyWithoutSkillNestedInput;

  @Field(() => OpportunitySkillUpdateManyWithoutSkillNestedInput, { nullable: true })
  opportunities?: OpportunitySkillUpdateManyWithoutSkillNestedInput;
}
