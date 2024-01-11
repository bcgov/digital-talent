import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ElistAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  rank?: keyof typeof SortOrder;
}
