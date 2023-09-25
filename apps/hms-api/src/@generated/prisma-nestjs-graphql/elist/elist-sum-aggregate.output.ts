import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class ElistSumAggregate {
  @Field(() => Int, { nullable: true })
  rank?: number;
}
