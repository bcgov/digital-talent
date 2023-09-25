import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { JobDescriptionOrderByRelationAggregateInput } from '../job-description/job-description-order-by-relation-aggregate.input';
import { GridOrderByWithRelationInput } from '../grid/grid-order-by-with-relation.input';
import { OccupationGroupOrderByWithRelationInput } from '../occupation-group/occupation-group-order-by-with-relation.input';

@InputType()
export class ClassificationOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  grid_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  occupation_group_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  rate_adjustment?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  updated_at?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  deleted_at?: SortOrderInput;

  @Field(() => JobDescriptionOrderByRelationAggregateInput, { nullable: true })
  @Type(() => JobDescriptionOrderByRelationAggregateInput)
  job_descriptions?: JobDescriptionOrderByRelationAggregateInput;

  @Field(() => GridOrderByWithRelationInput, { nullable: true })
  @Type(() => GridOrderByWithRelationInput)
  grid?: GridOrderByWithRelationInput;

  @Field(() => OccupationGroupOrderByWithRelationInput, { nullable: true })
  @Type(() => OccupationGroupOrderByWithRelationInput)
  occupation_group?: OccupationGroupOrderByWithRelationInput;
}
