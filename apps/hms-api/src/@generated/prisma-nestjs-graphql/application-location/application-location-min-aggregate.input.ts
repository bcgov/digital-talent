import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ApplicationLocationMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  application_id?: true;

  @Field(() => Boolean, { nullable: true })
  location_id?: true;

  @Field(() => Boolean, { nullable: true })
  rank?: true;

  @Field(() => Boolean, { nullable: true })
  created_at?: true;

  @Field(() => Boolean, { nullable: true })
  updated_at?: true;

  @Field(() => Boolean, { nullable: true })
  deleted_at?: true;
}
