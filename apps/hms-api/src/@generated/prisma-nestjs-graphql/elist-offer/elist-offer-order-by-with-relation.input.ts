import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ElistOrderByWithRelationInput } from '../elist/elist-order-by-with-relation.input';
import { OpportunityOrderByWithRelationInput } from '../opportunity/opportunity-order-by-with-relation.input';

@InputType()
export class ElistOfferOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  elist_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  opportunity_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  is_accepted?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  updated_at?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  deleted_at?: SortOrderInput;

  @Field(() => ElistOrderByWithRelationInput, { nullable: true })
  elist?: ElistOrderByWithRelationInput;

  @Field(() => OpportunityOrderByWithRelationInput, { nullable: true })
  opportunity?: OpportunityOrderByWithRelationInput;
}
