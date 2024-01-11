import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class ElistCount {
  @Field(() => Int, { nullable: false })
  offers?: number;
}
