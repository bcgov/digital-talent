import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ApplicationSkillCountOrderByAggregateInput } from './application-skill-count-order-by-aggregate.input';
import { ApplicationSkillAvgOrderByAggregateInput } from './application-skill-avg-order-by-aggregate.input';
import { ApplicationSkillMaxOrderByAggregateInput } from './application-skill-max-order-by-aggregate.input';
import { ApplicationSkillMinOrderByAggregateInput } from './application-skill-min-order-by-aggregate.input';
import { ApplicationSkillSumOrderByAggregateInput } from './application-skill-sum-order-by-aggregate.input';

@InputType()
export class ApplicationSkillOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  application_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  skill_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  years_experience?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  description?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  updated_at?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  deleted_at?: SortOrderInput;

  @Field(() => ApplicationSkillCountOrderByAggregateInput, { nullable: true })
  _count?: ApplicationSkillCountOrderByAggregateInput;

  @Field(() => ApplicationSkillAvgOrderByAggregateInput, { nullable: true })
  _avg?: ApplicationSkillAvgOrderByAggregateInput;

  @Field(() => ApplicationSkillMaxOrderByAggregateInput, { nullable: true })
  _max?: ApplicationSkillMaxOrderByAggregateInput;

  @Field(() => ApplicationSkillMinOrderByAggregateInput, { nullable: true })
  _min?: ApplicationSkillMinOrderByAggregateInput;

  @Field(() => ApplicationSkillSumOrderByAggregateInput, { nullable: true })
  _sum?: ApplicationSkillSumOrderByAggregateInput;
}
