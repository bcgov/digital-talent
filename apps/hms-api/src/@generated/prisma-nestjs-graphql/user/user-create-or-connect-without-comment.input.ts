import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutCommentInput } from './user-create-without-comment.input';

@InputType()
export class UserCreateOrConnectWithoutCommentInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'deltek_id' | 'email'>;

  @Field(() => UserCreateWithoutCommentInput, { nullable: false })
  @Type(() => UserCreateWithoutCommentInput)
  create!: UserCreateWithoutCommentInput;
}
