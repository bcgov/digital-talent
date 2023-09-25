import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ApplicationCountOrderByAggregateInput } from './application-count-order-by-aggregate.input';
import { ApplicationMaxOrderByAggregateInput } from './application-max-order-by-aggregate.input';
import { ApplicationMinOrderByAggregateInput } from './application-min-order-by-aggregate.input';

@InputType()
export class ApplicationOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  applicant_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  updated_at?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  deleted_at?: SortOrderInput;

  @Field(() => SortOrder, { nullable: true })
  json?: keyof typeof SortOrder;

  @Field(() => ApplicationCountOrderByAggregateInput, { nullable: true })
  _count?: ApplicationCountOrderByAggregateInput;

  @Field(() => ApplicationMaxOrderByAggregateInput, { nullable: true })
  _max?: ApplicationMaxOrderByAggregateInput;

  @Field(() => ApplicationMinOrderByAggregateInput, { nullable: true })
  _min?: ApplicationMinOrderByAggregateInput;
}
