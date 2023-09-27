import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SkillCountOrderByAggregateInput } from './skill-count-order-by-aggregate.input';
import { SkillMaxOrderByAggregateInput } from './skill-max-order-by-aggregate.input';
import { SkillMinOrderByAggregateInput } from './skill-min-order-by-aggregate.input';

@InputType()
export class SkillOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  category?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  description?: SortOrderInput;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  updated_at?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  deleted_at?: SortOrderInput;

  @Field(() => SkillCountOrderByAggregateInput, { nullable: true })
  _count?: SkillCountOrderByAggregateInput;

  @Field(() => SkillMaxOrderByAggregateInput, { nullable: true })
  _max?: SkillMaxOrderByAggregateInput;

  @Field(() => SkillMinOrderByAggregateInput, { nullable: true })
  _min?: SkillMinOrderByAggregateInput;
}
