import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ClassificationCountOrderByAggregateInput } from './classification-count-order-by-aggregate.input';
import { ClassificationAvgOrderByAggregateInput } from './classification-avg-order-by-aggregate.input';
import { ClassificationMaxOrderByAggregateInput } from './classification-max-order-by-aggregate.input';
import { ClassificationMinOrderByAggregateInput } from './classification-min-order-by-aggregate.input';
import { ClassificationSumOrderByAggregateInput } from './classification-sum-order-by-aggregate.input';

@InputType()
export class ClassificationOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  grid_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  occupation_group_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  rate_adjustment?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  updated_at?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  deleted_at?: SortOrderInput;

  @Field(() => ClassificationCountOrderByAggregateInput, { nullable: true })
  @Type(() => ClassificationCountOrderByAggregateInput)
  _count?: ClassificationCountOrderByAggregateInput;

  @Field(() => ClassificationAvgOrderByAggregateInput, { nullable: true })
  @Type(() => ClassificationAvgOrderByAggregateInput)
  _avg?: ClassificationAvgOrderByAggregateInput;

  @Field(() => ClassificationMaxOrderByAggregateInput, { nullable: true })
  @Type(() => ClassificationMaxOrderByAggregateInput)
  _max?: ClassificationMaxOrderByAggregateInput;

  @Field(() => ClassificationMinOrderByAggregateInput, { nullable: true })
  @Type(() => ClassificationMinOrderByAggregateInput)
  _min?: ClassificationMinOrderByAggregateInput;

  @Field(() => ClassificationSumOrderByAggregateInput, { nullable: true })
  @Type(() => ClassificationSumOrderByAggregateInput)
  _sum?: ClassificationSumOrderByAggregateInput;
}
