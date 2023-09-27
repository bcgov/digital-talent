import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class OpportunityCount {
  @Field(() => Int, { nullable: false })
  skills?: number;

  @Field(() => Int, { nullable: false })
  locations?: number;

  @Field(() => Int, { nullable: false })
  offers?: number;
}
