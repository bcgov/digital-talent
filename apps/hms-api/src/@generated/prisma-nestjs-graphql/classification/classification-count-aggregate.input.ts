import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ClassificationCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  grid_id?: true;

  @Field(() => Boolean, { nullable: true })
  occupation_group_id?: true;

  @Field(() => Boolean, { nullable: true })
  rate_adjustment?: true;

  @Field(() => Boolean, { nullable: true })
  created_at?: true;

  @Field(() => Boolean, { nullable: true })
  updated_at?: true;

  @Field(() => Boolean, { nullable: true })
  deleted_at?: true;

  @Field(() => Boolean, { nullable: true })
  _all?: true;
}
