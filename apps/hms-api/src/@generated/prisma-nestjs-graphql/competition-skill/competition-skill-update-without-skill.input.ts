import { Field, InputType, Int } from '@nestjs/graphql';
import { CompetitionUpdateOneRequiredWithoutSkillsNestedInput } from '../competition/competition-update-one-required-without-skills-nested.input';

@InputType()
export class CompetitionSkillUpdateWithoutSkillInput {
  @Field(() => Int, { nullable: true })
  min_years_experience?: number;

  @Field(() => Boolean, { nullable: true })
  is_required?: boolean;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => CompetitionUpdateOneRequiredWithoutSkillsNestedInput, { nullable: true })
  competition?: CompetitionUpdateOneRequiredWithoutSkillsNestedInput;
}
