import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { GridCountOrderByAggregateInput } from './grid-count-order-by-aggregate.input';
import { GridMaxOrderByAggregateInput } from './grid-max-order-by-aggregate.input';
import { GridMinOrderByAggregateInput } from './grid-min-order-by-aggregate.input';

@InputType()
export class GridOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  steps?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  updated_at?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  deleted_at?: SortOrderInput;

  @Field(() => GridCountOrderByAggregateInput, { nullable: true })
  _count?: GridCountOrderByAggregateInput;

  @Field(() => GridMaxOrderByAggregateInput, { nullable: true })
  _max?: GridMaxOrderByAggregateInput;

  @Field(() => GridMinOrderByAggregateInput, { nullable: true })
  _min?: GridMinOrderByAggregateInput;
}
