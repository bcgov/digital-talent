import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { JobDescriptionCountOrderByAggregateInput } from './job-description-count-order-by-aggregate.input';
import { JobDescriptionMaxOrderByAggregateInput } from './job-description-max-order-by-aggregate.input';
import { JobDescriptionMinOrderByAggregateInput } from './job-description-min-order-by-aggregate.input';

@InputType()
export class JobDescriptionOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  classification_id?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  e_class_id?: SortOrderInput;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  updated_at?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  deleted_at?: SortOrderInput;

  @Field(() => JobDescriptionCountOrderByAggregateInput, { nullable: true })
  _count?: JobDescriptionCountOrderByAggregateInput;

  @Field(() => JobDescriptionMaxOrderByAggregateInput, { nullable: true })
  _max?: JobDescriptionMaxOrderByAggregateInput;

  @Field(() => JobDescriptionMinOrderByAggregateInput, { nullable: true })
  _min?: JobDescriptionMinOrderByAggregateInput;
}
