import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ElistAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  rank?: true;
}
