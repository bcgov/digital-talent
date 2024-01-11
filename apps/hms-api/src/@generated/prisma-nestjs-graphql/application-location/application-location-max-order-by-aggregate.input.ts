import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ApplicationLocationMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  application_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  location_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  rank?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updated_at?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  deleted_at?: keyof typeof SortOrder;
}
