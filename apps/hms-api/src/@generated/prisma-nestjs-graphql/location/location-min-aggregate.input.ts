import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LocationMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  deltek_id?: true;

  @Field(() => Boolean, { nullable: true })
  name?: true;

  @Field(() => Boolean, { nullable: true })
  postal_code?: true;

  @Field(() => Boolean, { nullable: true })
  lat?: true;

  @Field(() => Boolean, { nullable: true })
  lon?: true;

  @Field(() => Boolean, { nullable: true })
  region?: true;

  @Field(() => Boolean, { nullable: true })
  created_at?: true;

  @Field(() => Boolean, { nullable: true })
  updated_at?: true;

  @Field(() => Boolean, { nullable: true })
  deleted_at?: true;
}
