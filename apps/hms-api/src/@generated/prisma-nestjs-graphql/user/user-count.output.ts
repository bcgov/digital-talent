import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {
  @Field(() => Int, { nullable: false })
  applications?: number;

  @Field(() => Int, { nullable: false })
  comments?: number;

  @Field(() => Int, { nullable: false })
  competitions?: number;

  @Field(() => Int, { nullable: false })
  identities?: number;

  @Field(() => Int, { nullable: false })
  elist?: number;

  @Field(() => Int, { nullable: false })
  opportunities?: number;
}
