import { Field, ObjectType, Float } from '@nestjs/graphql';

@ObjectType()
export class ElistAvgAggregate {
  @Field(() => Float, { nullable: true })
  rank?: number;
}
