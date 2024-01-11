import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ElistSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  rank?: true;
}
