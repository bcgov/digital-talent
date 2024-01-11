import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ClassificationAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  rate_adjustment?: keyof typeof SortOrder;
}
