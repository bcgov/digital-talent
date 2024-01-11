import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CompetitionSkillCountOrderByAggregateInput } from './competition-skill-count-order-by-aggregate.input';
import { CompetitionSkillAvgOrderByAggregateInput } from './competition-skill-avg-order-by-aggregate.input';
import { CompetitionSkillMaxOrderByAggregateInput } from './competition-skill-max-order-by-aggregate.input';
import { CompetitionSkillMinOrderByAggregateInput } from './competition-skill-min-order-by-aggregate.input';
import { CompetitionSkillSumOrderByAggregateInput } from './competition-skill-sum-order-by-aggregate.input';

@InputType()
export class CompetitionSkillOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  competition_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  skill_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  min_years_experience?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  is_required?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  updated_at?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  deleted_at?: SortOrderInput;

  @Field(() => CompetitionSkillCountOrderByAggregateInput, { nullable: true })
  _count?: CompetitionSkillCountOrderByAggregateInput;

  @Field(() => CompetitionSkillAvgOrderByAggregateInput, { nullable: true })
  _avg?: CompetitionSkillAvgOrderByAggregateInput;

  @Field(() => CompetitionSkillMaxOrderByAggregateInput, { nullable: true })
  _max?: CompetitionSkillMaxOrderByAggregateInput;

  @Field(() => CompetitionSkillMinOrderByAggregateInput, { nullable: true })
  _min?: CompetitionSkillMinOrderByAggregateInput;

  @Field(() => CompetitionSkillSumOrderByAggregateInput, { nullable: true })
  _sum?: CompetitionSkillSumOrderByAggregateInput;
}
