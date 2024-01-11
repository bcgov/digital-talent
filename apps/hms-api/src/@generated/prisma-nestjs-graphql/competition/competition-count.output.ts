import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class CompetitionCount {
  @Field(() => Int, { nullable: false })
  opportunities?: number;

  @Field(() => Int, { nullable: false })
  elist?: number;

  @Field(() => Int, { nullable: false })
  skills?: number;

  @Field(() => Int, { nullable: false })
  schedule?: number;
}
