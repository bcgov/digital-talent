import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class CommentOrderByWithRelationInput {
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

  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  user?: UserOrderByWithRelationInput;
}
