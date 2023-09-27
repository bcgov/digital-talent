import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LocationSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  lat?: true;

  @Field(() => Boolean, { nullable: true })
  lon?: true;
}
