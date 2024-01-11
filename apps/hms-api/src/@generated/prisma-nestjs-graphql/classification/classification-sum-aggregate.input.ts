import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ClassificationSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  rate_adjustment?: true;
}
