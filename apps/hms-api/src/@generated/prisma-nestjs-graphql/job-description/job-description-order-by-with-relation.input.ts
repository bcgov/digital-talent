import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ClassificationOrderByWithRelationInput } from '../classification/classification-order-by-with-relation.input';
import { CompetitionOrderByRelationAggregateInput } from '../competition/competition-order-by-relation-aggregate.input';

@InputType()
export class JobDescriptionOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  classification_id?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  e_class_id?: SortOrderInput;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  updated_at?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  deleted_at?: SortOrderInput;

  @Field(() => ClassificationOrderByWithRelationInput, { nullable: true })
  @Type(() => ClassificationOrderByWithRelationInput)
  classification?: ClassificationOrderByWithRelationInput;

  @Field(() => CompetitionOrderByRelationAggregateInput, { nullable: true })
  competitions?: CompetitionOrderByRelationAggregateInput;
}
