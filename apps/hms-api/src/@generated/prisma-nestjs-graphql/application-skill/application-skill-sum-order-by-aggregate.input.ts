import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ApplicationSkillSumOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  years_experience?: keyof typeof SortOrder;
}
