import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UserCreateWithoutCommentInput } from './user-create-without-comment.input';
import { UserCreateOrConnectWithoutCommentInput } from './user-create-or-connect-without-comment.input';
import { UserUpsertWithoutCommentInput } from './user-upsert-without-comment.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutCommentInput } from './user-update-to-one-with-where-without-comment.input';

@InputType()
export class UserUpdateOneRequiredWithoutCommentNestedInput {
  @Field(() => UserCreateWithoutCommentInput, { nullable: true })
  @Type(() => UserCreateWithoutCommentInput)
  create?: UserCreateWithoutCommentInput;

  @Field(() => UserCreateOrConnectWithoutCommentInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutCommentInput)
  connectOrCreate?: UserCreateOrConnectWithoutCommentInput;

  @Field(() => UserUpsertWithoutCommentInput, { nullable: true })
  @Type(() => UserUpsertWithoutCommentInput)
  upsert?: UserUpsertWithoutCommentInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'deltek_id' | 'email'>;

  @Field(() => UserUpdateToOneWithWhereWithoutCommentInput, { nullable: true })
  @Type(() => UserUpdateToOneWithWhereWithoutCommentInput)
  update?: UserUpdateToOneWithWhereWithoutCommentInput;
}
