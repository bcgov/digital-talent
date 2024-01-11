import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ApplicationLocationAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  rank?: true;
}
