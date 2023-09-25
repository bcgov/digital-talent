import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UserCreateWithoutCommentInput } from './user-create-without-comment.input';
import { UserCreateOrConnectWithoutCommentInput } from './user-create-or-connect-without-comment.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutCommentInput {
  @Field(() => UserCreateWithoutCommentInput, { nullable: true })
  @Type(() => UserCreateWithoutCommentInput)
  create?: UserCreateWithoutCommentInput;

  @Field(() => UserCreateOrConnectWithoutCommentInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutCommentInput)
  connectOrCreate?: UserCreateOrConnectWithoutCommentInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'deltek_id' | 'email'>;
}
