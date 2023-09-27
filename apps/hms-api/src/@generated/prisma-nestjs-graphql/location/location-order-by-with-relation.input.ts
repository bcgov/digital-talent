import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ApplicationLocationOrderByRelationAggregateInput } from '../application-location/application-location-order-by-relation-aggregate.input';
import { OpportunityLocationOrderByRelationAggregateInput } from '../opportunity-location/opportunity-location-order-by-relation-aggregate.input';

@InputType()
export class LocationOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  deltek_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  postal_code?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  lat?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  lon?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  region?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  updated_at?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  deleted_at?: SortOrderInput;

  @Field(() => ApplicationLocationOrderByRelationAggregateInput, { nullable: true })
  applications?: ApplicationLocationOrderByRelationAggregateInput;

  @Field(() => OpportunityLocationOrderByRelationAggregateInput, { nullable: true })
  opportunities?: OpportunityLocationOrderByRelationAggregateInput;
}
