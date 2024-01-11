import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class LocationCount {
  @Field(() => Int, { nullable: false })
  applications?: number;

  @Field(() => Int, { nullable: false })
  opportunities?: number;
}
