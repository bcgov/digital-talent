import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class ApplicationCount {
  @Field(() => Int, { nullable: false })
  locations?: number;

  @Field(() => Int, { nullable: false })
  skills?: number;
}
