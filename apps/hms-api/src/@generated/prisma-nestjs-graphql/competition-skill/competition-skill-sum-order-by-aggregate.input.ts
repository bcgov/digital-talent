import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class CompetitionSkillSumOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  min_years_experience?: keyof typeof SortOrder;
}
