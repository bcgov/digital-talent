import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ApplicationSkillCountOrderByAggregateInput {
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

  @Field(() => SortOrder, { nullable: true })
  updated_at?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  deleted_at?: keyof typeof SortOrder;
}
