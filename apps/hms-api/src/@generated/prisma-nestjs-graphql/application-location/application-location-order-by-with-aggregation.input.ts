import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ApplicationLocationCountOrderByAggregateInput } from './application-location-count-order-by-aggregate.input';
import { ApplicationLocationAvgOrderByAggregateInput } from './application-location-avg-order-by-aggregate.input';
import { ApplicationLocationMaxOrderByAggregateInput } from './application-location-max-order-by-aggregate.input';
import { ApplicationLocationMinOrderByAggregateInput } from './application-location-min-order-by-aggregate.input';
import { ApplicationLocationSumOrderByAggregateInput } from './application-location-sum-order-by-aggregate.input';

@InputType()
export class ApplicationLocationOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  application_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  location_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  rank?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  updated_at?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  deleted_at?: SortOrderInput;

  @Field(() => ApplicationLocationCountOrderByAggregateInput, { nullable: true })
  _count?: ApplicationLocationCountOrderByAggregateInput;

  @Field(() => ApplicationLocationAvgOrderByAggregateInput, { nullable: true })
  _avg?: ApplicationLocationAvgOrderByAggregateInput;

  @Field(() => ApplicationLocationMaxOrderByAggregateInput, { nullable: true })
  _max?: ApplicationLocationMaxOrderByAggregateInput;

  @Field(() => ApplicationLocationMinOrderByAggregateInput, { nullable: true })
  _min?: ApplicationLocationMinOrderByAggregateInput;

  @Field(() => ApplicationLocationSumOrderByAggregateInput, { nullable: true })
  _sum?: ApplicationLocationSumOrderByAggregateInput;
}
