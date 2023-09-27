import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class OccupationGroupCount {
  @Field(() => Int, { nullable: false })
  classifications?: number;
}
