import { Field, ObjectType, Float } from '@nestjs/graphql';

@ObjectType()
export class ApplicationLocationAvgAggregate {
  @Field(() => Float, { nullable: true })
  rank?: number;
}
