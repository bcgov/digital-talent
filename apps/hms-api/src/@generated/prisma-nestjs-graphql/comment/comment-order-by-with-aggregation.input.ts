import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CommentCountOrderByAggregateInput } from './comment-count-order-by-aggregate.input';
import { CommentMaxOrderByAggregateInput } from './comment-max-order-by-aggregate.input';
import { CommentMinOrderByAggregateInput } from './comment-min-order-by-aggregate.input';

@InputType()
export class CommentOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  record_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  record_type?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  user_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  text?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  updated_at?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  deleted_at?: SortOrderInput;

  @Field(() => CommentCountOrderByAggregateInput, { nullable: true })
  _count?: CommentCountOrderByAggregateInput;

  @Field(() => CommentMaxOrderByAggregateInput, { nullable: true })
  _max?: CommentMaxOrderByAggregateInput;

  @Field(() => CommentMinOrderByAggregateInput, { nullable: true })
  _min?: CommentMinOrderByAggregateInput;
}
