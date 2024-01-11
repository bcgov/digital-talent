import { Field, InputType, Int } from '@nestjs/graphql';
import { CompetitionCreateNestedOneWithoutSkillsInput } from '../competition/competition-create-nested-one-without-skills.input';

@InputType()
export class CompetitionSkillCreateWithoutSkillInput {
  @Field(() => Int, { nullable: false })
  min_years_experience!: number;

  @Field(() => Boolean, { nullable: false })
  is_required!: boolean;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => CompetitionCreateNestedOneWithoutSkillsInput, { nullable: false })
  competition!: CompetitionCreateNestedOneWithoutSkillsInput;
}
