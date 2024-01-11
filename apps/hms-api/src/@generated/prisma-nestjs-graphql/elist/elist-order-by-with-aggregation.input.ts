import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ElistCountOrderByAggregateInput } from './elist-count-order-by-aggregate.input';
import { ElistAvgOrderByAggregateInput } from './elist-avg-order-by-aggregate.input';
import { ElistMaxOrderByAggregateInput } from './elist-max-order-by-aggregate.input';
import { ElistMinOrderByAggregateInput } from './elist-min-order-by-aggregate.input';
import { ElistSumOrderByAggregateInput } from './elist-sum-order-by-aggregate.input';

@InputType()
export class ElistOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  applicant_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  competition_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  rank?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  updated_at?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  deleted_at?: SortOrderInput;

  @Field(() => ElistCountOrderByAggregateInput, { nullable: true })
  _count?: ElistCountOrderByAggregateInput;

  @Field(() => ElistAvgOrderByAggregateInput, { nullable: true })
  _avg?: ElistAvgOrderByAggregateInput;

  @Field(() => ElistMaxOrderByAggregateInput, { nullable: true })
  _max?: ElistMaxOrderByAggregateInput;

  @Field(() => ElistMinOrderByAggregateInput, { nullable: true })
  _min?: ElistMinOrderByAggregateInput;

  @Field(() => ElistSumOrderByAggregateInput, { nullable: true })
  _sum?: ElistSumOrderByAggregateInput;
}
