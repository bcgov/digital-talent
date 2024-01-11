import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { LocationOrderByWithRelationInput } from '../location/location-order-by-with-relation.input';
import { OpportunityOrderByWithRelationInput } from '../opportunity/opportunity-order-by-with-relation.input';

@InputType()
export class OpportunityLocationOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  location_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  opportunity_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  deleted_at?: SortOrderInput;

  @Field(() => LocationOrderByWithRelationInput, { nullable: true })
  location?: LocationOrderByWithRelationInput;

  @Field(() => OpportunityOrderByWithRelationInput, { nullable: true })
  opportunity?: OpportunityOrderByWithRelationInput;
}
