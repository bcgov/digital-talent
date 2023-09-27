import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class MinistryCount {
  @Field(() => Int, { nullable: false })
  opportunities?: number;
}
