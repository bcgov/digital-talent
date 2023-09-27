import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ElistMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  applicant_id?: true;

  @Field(() => Boolean, { nullable: true })
  competition_id?: true;

  @Field(() => Boolean, { nullable: true })
  rank?: true;

  @Field(() => Boolean, { nullable: true })
  created_at?: true;

  @Field(() => Boolean, { nullable: true })
  updated_at?: true;

  @Field(() => Boolean, { nullable: true })
  deleted_at?: true;
}
