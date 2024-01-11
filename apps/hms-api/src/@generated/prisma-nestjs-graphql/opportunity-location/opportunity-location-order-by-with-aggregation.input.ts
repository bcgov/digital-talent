import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { OpportunityLocationCountOrderByAggregateInput } from './opportunity-location-count-order-by-aggregate.input';
import { OpportunityLocationMaxOrderByAggregateInput } from './opportunity-location-max-order-by-aggregate.input';
import { OpportunityLocationMinOrderByAggregateInput } from './opportunity-location-min-order-by-aggregate.input';

@InputType()
export class OpportunityLocationOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  location_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  opportunity_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  deleted_at?: SortOrderInput;

  @Field(() => OpportunityLocationCountOrderByAggregateInput, { nullable: true })
  _count?: OpportunityLocationCountOrderByAggregateInput;

  @Field(() => OpportunityLocationMaxOrderByAggregateInput, { nullable: true })
  _max?: OpportunityLocationMaxOrderByAggregateInput;

  @Field(() => OpportunityLocationMinOrderByAggregateInput, { nullable: true })
  _min?: OpportunityLocationMinOrderByAggregateInput;
}
