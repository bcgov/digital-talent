import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CompetitionScheduleCountOrderByAggregateInput } from './competition-schedule-count-order-by-aggregate.input';
import { CompetitionScheduleMaxOrderByAggregateInput } from './competition-schedule-max-order-by-aggregate.input';
import { CompetitionScheduleMinOrderByAggregateInput } from './competition-schedule-min-order-by-aggregate.input';

@InputType()
export class CompetitionScheduleOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  competition_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  state?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  start_at?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  end_at?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  updated_at?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  deleted_at?: SortOrderInput;

  @Field(() => CompetitionScheduleCountOrderByAggregateInput, { nullable: true })
  _count?: CompetitionScheduleCountOrderByAggregateInput;

  @Field(() => CompetitionScheduleMaxOrderByAggregateInput, { nullable: true })
  _max?: CompetitionScheduleMaxOrderByAggregateInput;

  @Field(() => CompetitionScheduleMinOrderByAggregateInput, { nullable: true })
  _min?: CompetitionScheduleMinOrderByAggregateInput;
}
