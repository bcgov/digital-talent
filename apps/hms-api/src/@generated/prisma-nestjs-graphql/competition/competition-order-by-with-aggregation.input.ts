import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CompetitionCountOrderByAggregateInput } from './competition-count-order-by-aggregate.input';
import { CompetitionMaxOrderByAggregateInput } from './competition-max-order-by-aggregate.input';
import { CompetitionMinOrderByAggregateInput } from './competition-min-order-by-aggregate.input';

@InputType()
export class CompetitionOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  deltek_id?: SortOrderInput;

  @Field(() => SortOrder, { nullable: true })
  job_description_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  recruiter_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  category?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  state?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  metadata?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  updated_at?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  deleted_at?: SortOrderInput;

  @Field(() => CompetitionCountOrderByAggregateInput, { nullable: true })
  _count?: CompetitionCountOrderByAggregateInput;

  @Field(() => CompetitionMaxOrderByAggregateInput, { nullable: true })
  _max?: CompetitionMaxOrderByAggregateInput;

  @Field(() => CompetitionMinOrderByAggregateInput, { nullable: true })
  _min?: CompetitionMinOrderByAggregateInput;
}
