import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class LocationAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  lat?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  lon?: keyof typeof SortOrder;
}
