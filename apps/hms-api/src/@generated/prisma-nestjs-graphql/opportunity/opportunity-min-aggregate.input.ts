import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class OpportunityMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  competition_id?: true;

  @Field(() => Boolean, { nullable: true })
  deltek_id?: true;

  @Field(() => Boolean, { nullable: true })
  hiring_manager_id?: true;

  @Field(() => Boolean, { nullable: true })
  ministry_id?: true;

  @Field(() => Boolean, { nullable: true })
  state?: true;

  @Field(() => Boolean, { nullable: true })
  involvement?: true;

  @Field(() => Boolean, { nullable: true })
  work_option?: true;

  @Field(() => Boolean, { nullable: true })
  description?: true;

  @Field(() => Boolean, { nullable: true })
  candidate_description?: true;

  @Field(() => Boolean, { nullable: true })
  team_name?: true;

  @Field(() => Boolean, { nullable: true })
  team_description?: true;

  @Field(() => Boolean, { nullable: true })
  work_examples?: true;

  @Field(() => Boolean, { nullable: true })
  created_at?: true;

  @Field(() => Boolean, { nullable: true })
  updated_at?: true;

  @Field(() => Boolean, { nullable: true })
  deleted_at?: true;
}
