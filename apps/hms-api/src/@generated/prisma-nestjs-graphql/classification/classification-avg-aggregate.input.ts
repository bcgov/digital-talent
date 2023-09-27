import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ClassificationAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  rate_adjustment?: true;
}
