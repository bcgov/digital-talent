import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { UserUpdateWithoutCommentInput } from './user-update-without-comment.input';
import { UserCreateWithoutCommentInput } from './user-create-without-comment.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutCommentInput {
  @Field(() => UserUpdateWithoutCommentInput, { nullable: false })
  @Type(() => UserUpdateWithoutCommentInput)
  update!: UserUpdateWithoutCommentInput;

  @Field(() => UserCreateWithoutCommentInput, { nullable: false })
  @Type(() => UserCreateWithoutCommentInput)
  create!: UserCreateWithoutCommentInput;

  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: UserWhereInput;
}
