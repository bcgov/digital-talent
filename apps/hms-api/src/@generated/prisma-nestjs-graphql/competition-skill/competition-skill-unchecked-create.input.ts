import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CompetitionSkillUncheckedCreateInput {
  @Field(() => String, { nullable: false })
  competition_id!: string;

  @Field(() => String, { nullable: false })
  skill_id!: string;

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
}
