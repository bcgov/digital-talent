import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { MinistryCountOrderByAggregateInput } from './ministry-count-order-by-aggregate.input';
import { MinistryMaxOrderByAggregateInput } from './ministry-max-order-by-aggregate.input';
import { MinistryMinOrderByAggregateInput } from './ministry-min-order-by-aggregate.input';

@InputType()
export class MinistryOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  deltek_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  updated_at?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  deleted_at?: SortOrderInput;

  @Field(() => MinistryCountOrderByAggregateInput, { nullable: true })
  _count?: MinistryCountOrderByAggregateInput;

  @Field(() => MinistryMaxOrderByAggregateInput, { nullable: true })
  _max?: MinistryMaxOrderByAggregateInput;

  @Field(() => MinistryMinOrderByAggregateInput, { nullable: true })
  _min?: MinistryMinOrderByAggregateInput;
}
