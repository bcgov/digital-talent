import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { OpportunityCountOrderByAggregateInput } from './opportunity-count-order-by-aggregate.input';
import { OpportunityMaxOrderByAggregateInput } from './opportunity-max-order-by-aggregate.input';
import { OpportunityMinOrderByAggregateInput } from './opportunity-min-order-by-aggregate.input';

@InputType()
export class OpportunityOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  competition_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  deltek_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  hiring_manager_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  ministry_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  state?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  involvement?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  work_option?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  description?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  candidate_description?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  team_name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  team_description?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  work_examples?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  updated_at?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  deleted_at?: SortOrderInput;

  @Field(() => OpportunityCountOrderByAggregateInput, { nullable: true })
  _count?: OpportunityCountOrderByAggregateInput;

  @Field(() => OpportunityMaxOrderByAggregateInput, { nullable: true })
  _max?: OpportunityMaxOrderByAggregateInput;

  @Field(() => OpportunityMinOrderByAggregateInput, { nullable: true })
  _min?: OpportunityMinOrderByAggregateInput;
}
