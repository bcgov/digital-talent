import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class GridCount {
  @Field(() => Int, { nullable: false })
  classifications?: number;
}
