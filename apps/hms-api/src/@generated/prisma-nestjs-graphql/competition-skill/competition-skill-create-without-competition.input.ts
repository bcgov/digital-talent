import { Field, InputType, Int } from '@nestjs/graphql';
import { SkillCreateNestedOneWithoutCompetitionsInput } from '../skill/skill-create-nested-one-without-competitions.input';

@InputType()
export class CompetitionSkillCreateWithoutCompetitionInput {
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

  @Field(() => SkillCreateNestedOneWithoutCompetitionsInput, { nullable: false })
  skill!: SkillCreateNestedOneWithoutCompetitionsInput;
}
