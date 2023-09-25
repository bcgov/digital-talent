import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { OpportunitySkillCountOrderByAggregateInput } from './opportunity-skill-count-order-by-aggregate.input';
import { OpportunitySkillMaxOrderByAggregateInput } from './opportunity-skill-max-order-by-aggregate.input';
import { OpportunitySkillMinOrderByAggregateInput } from './opportunity-skill-min-order-by-aggregate.input';

@InputType()
export class OpportunitySkillOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  opportunity_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  skill_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  deleted_at?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  opportunityId?: SortOrderInput;

  @Field(() => OpportunitySkillCountOrderByAggregateInput, { nullable: true })
  _count?: OpportunitySkillCountOrderByAggregateInput;

  @Field(() => OpportunitySkillMaxOrderByAggregateInput, { nullable: true })
  _max?: OpportunitySkillMaxOrderByAggregateInput;

  @Field(() => OpportunitySkillMinOrderByAggregateInput, { nullable: true })
  _min?: OpportunitySkillMinOrderByAggregateInput;
}
