import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CommentCreateWithoutUserInput } from './comment-create-without-user.input';
import { CommentCreateOrConnectWithoutUserInput } from './comment-create-or-connect-without-user.input';
import { CommentCreateManyUserInputEnvelope } from './comment-create-many-user-input-envelope.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentUncheckedCreateNestedManyWithoutUserInput {
  @Field(() => [CommentCreateWithoutUserInput], { nullable: true })
  @Type(() => CommentCreateWithoutUserInput)
  create?: Array<CommentCreateWithoutUserInput>;

  @Field(() => [CommentCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => CommentCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<CommentCreateOrConnectWithoutUserInput>;

  @Field(() => CommentCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => CommentCreateManyUserInputEnvelope)
  createMany?: CommentCreateManyUserInputEnvelope;

  @Field(() => [CommentWhereUniqueInput], { nullable: true })
  @Type(() => CommentWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}
