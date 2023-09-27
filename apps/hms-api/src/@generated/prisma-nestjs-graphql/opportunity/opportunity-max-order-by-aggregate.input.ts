import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class OpportunityMaxOrderByAggregateInput {
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

  @Field(() => SortOrder, { nullable: true })
  updated_at?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  deleted_at?: keyof typeof SortOrder;
}
