import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ElistOfferCountOrderByAggregateInput } from './elist-offer-count-order-by-aggregate.input';
import { ElistOfferMaxOrderByAggregateInput } from './elist-offer-max-order-by-aggregate.input';
import { ElistOfferMinOrderByAggregateInput } from './elist-offer-min-order-by-aggregate.input';

@InputType()
export class ElistOfferOrderByWithAggregationInput {
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

  @Field(() => ElistOfferCountOrderByAggregateInput, { nullable: true })
  _count?: ElistOfferCountOrderByAggregateInput;

  @Field(() => ElistOfferMaxOrderByAggregateInput, { nullable: true })
  _max?: ElistOfferMaxOrderByAggregateInput;

  @Field(() => ElistOfferMinOrderByAggregateInput, { nullable: true })
  _min?: ElistOfferMinOrderByAggregateInput;
}
