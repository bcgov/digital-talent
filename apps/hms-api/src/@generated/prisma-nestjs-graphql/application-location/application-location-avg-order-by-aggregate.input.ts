import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ApplicationLocationAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  rank?: keyof typeof SortOrder;
}
