import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ClassificationMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  grid_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  occupation_group_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  rate_adjustment?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updated_at?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  deleted_at?: keyof typeof SortOrder;
}
