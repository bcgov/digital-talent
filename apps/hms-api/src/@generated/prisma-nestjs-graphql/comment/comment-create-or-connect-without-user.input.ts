import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentCreateWithoutUserInput } from './comment-create-without-user.input';

@InputType()
export class CommentCreateOrConnectWithoutUserInput {
  @Field(() => CommentWhereUniqueInput, { nullable: false })
  @Type(() => CommentWhereUniqueInput)
  where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

  @Field(() => CommentCreateWithoutUserInput, { nullable: false })
  @Type(() => CommentCreateWithoutUserInput)
  create!: CommentCreateWithoutUserInput;
}
