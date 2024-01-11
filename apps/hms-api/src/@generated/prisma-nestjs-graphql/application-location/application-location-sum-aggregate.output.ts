import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class ApplicationLocationSumAggregate {
  @Field(() => Int, { nullable: true })
  rank?: number;
}
