import { Field, ArgsType, HideField, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CommentWhereInput } from './comment-where.input';
import { CommentOrderByWithRelationInput } from './comment-order-by-with-relation.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentScalarFieldEnum } from './comment-scalar-field.enum';

@ArgsType()
export class FindManyCommentArgs {
  @Field(() => CommentWhereInput, { nullable: true })
  @Type(() => CommentWhereInput)
  where?: CommentWhereInput;

  @Field(() => [CommentOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<CommentOrderByWithRelationInput>;

  @HideField()
  cursor?: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @HideField()
  distinct?: Array<keyof typeof CommentScalarFieldEnum>;
}
