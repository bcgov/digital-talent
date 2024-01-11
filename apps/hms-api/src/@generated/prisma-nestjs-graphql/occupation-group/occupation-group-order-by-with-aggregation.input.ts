import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { OccupationGroupCountOrderByAggregateInput } from './occupation-group-count-order-by-aggregate.input';
import { OccupationGroupMaxOrderByAggregateInput } from './occupation-group-max-order-by-aggregate.input';
import { OccupationGroupMinOrderByAggregateInput } from './occupation-group-min-order-by-aggregate.input';

@InputType()
export class OccupationGroupOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  code?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  updated_at?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  deleted_at?: SortOrderInput;

  @Field(() => OccupationGroupCountOrderByAggregateInput, { nullable: true })
  _count?: OccupationGroupCountOrderByAggregateInput;

  @Field(() => OccupationGroupMaxOrderByAggregateInput, { nullable: true })
  _max?: OccupationGroupMaxOrderByAggregateInput;

  @Field(() => OccupationGroupMinOrderByAggregateInput, { nullable: true })
  _min?: OccupationGroupMinOrderByAggregateInput;
}
