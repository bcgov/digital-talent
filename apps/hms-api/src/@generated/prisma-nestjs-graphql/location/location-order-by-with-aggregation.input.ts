import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { LocationCountOrderByAggregateInput } from './location-count-order-by-aggregate.input';
import { LocationAvgOrderByAggregateInput } from './location-avg-order-by-aggregate.input';
import { LocationMaxOrderByAggregateInput } from './location-max-order-by-aggregate.input';
import { LocationMinOrderByAggregateInput } from './location-min-order-by-aggregate.input';
import { LocationSumOrderByAggregateInput } from './location-sum-order-by-aggregate.input';

@InputType()
export class LocationOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  deltek_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  postal_code?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  lat?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  lon?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  region?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  updated_at?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  deleted_at?: SortOrderInput;

  @Field(() => LocationCountOrderByAggregateInput, { nullable: true })
  _count?: LocationCountOrderByAggregateInput;

  @Field(() => LocationAvgOrderByAggregateInput, { nullable: true })
  _avg?: LocationAvgOrderByAggregateInput;

  @Field(() => LocationMaxOrderByAggregateInput, { nullable: true })
  _max?: LocationMaxOrderByAggregateInput;

  @Field(() => LocationMinOrderByAggregateInput, { nullable: true })
  _min?: LocationMinOrderByAggregateInput;

  @Field(() => LocationSumOrderByAggregateInput, { nullable: true })
  _sum?: LocationSumOrderByAggregateInput;
}
