import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CompetitionMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  deltek_id?: true;

  @Field(() => Boolean, { nullable: true })
  job_description_id?: true;

  @Field(() => Boolean, { nullable: true })
  recruiter_id?: true;

  @Field(() => Boolean, { nullable: true })
  category?: true;

  @Field(() => Boolean, { nullable: true })
  state?: true;

  @Field(() => Boolean, { nullable: true })
  created_at?: true;

  @Field(() => Boolean, { nullable: true })
  updated_at?: true;

  @Field(() => Boolean, { nullable: true })
  deleted_at?: true;
}
