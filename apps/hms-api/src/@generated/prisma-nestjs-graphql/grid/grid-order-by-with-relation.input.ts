import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ClassificationOrderByRelationAggregateInput } from '../classification/classification-order-by-relation-aggregate.input';

@InputType()
export class GridOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  steps?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  updated_at?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  deleted_at?: SortOrderInput;

  @Field(() => ClassificationOrderByRelationAggregateInput, { nullable: true })
  @Type(() => ClassificationOrderByRelationAggregateInput)
  classifications?: ClassificationOrderByRelationAggregateInput;
}
