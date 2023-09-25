import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ApplicationLocationSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  rank?: true;
}
