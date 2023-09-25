import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CommentUpdateInput } from './comment-update.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@ArgsType()
export class UpdateOneCommentArgs {
  @Field(() => CommentUpdateInput, { nullable: false })
  @Type(() => CommentUpdateInput)
  data!: CommentUpdateInput;

  @Field(() => CommentWhereUniqueInput, { nullable: false })
  @Type(() => CommentWhereUniqueInput)
  where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
}
