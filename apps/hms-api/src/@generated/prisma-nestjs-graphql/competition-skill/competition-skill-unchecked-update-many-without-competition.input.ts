import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CompetitionSkillUncheckedUpdateManyWithoutCompetitionInput {
  @Field(() => String, { nullable: true })
  skill_id?: string;

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
}
