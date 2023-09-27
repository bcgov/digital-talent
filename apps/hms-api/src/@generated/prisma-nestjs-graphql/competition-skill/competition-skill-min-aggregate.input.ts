import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CompetitionSkillMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  competition_id?: true;

  @Field(() => Boolean, { nullable: true })
  skill_id?: true;

  @Field(() => Boolean, { nullable: true })
  min_years_experience?: true;

  @Field(() => Boolean, { nullable: true })
  is_required?: true;

  @Field(() => Boolean, { nullable: true })
  created_at?: true;

  @Field(() => Boolean, { nullable: true })
  updated_at?: true;

  @Field(() => Boolean, { nullable: true })
  deleted_at?: true;
}
