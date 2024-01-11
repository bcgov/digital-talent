import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class CompetitionSkillCountOrderByAggregateInput {
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

  @Field(() => SortOrder, { nullable: true })
  updated_at?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  deleted_at?: keyof typeof SortOrder;
}
