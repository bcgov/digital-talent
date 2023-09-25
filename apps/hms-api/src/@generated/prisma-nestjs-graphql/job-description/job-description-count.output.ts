import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class JobDescriptionCount {
  @Field(() => Int, { nullable: false })
  Competition?: number;
}
