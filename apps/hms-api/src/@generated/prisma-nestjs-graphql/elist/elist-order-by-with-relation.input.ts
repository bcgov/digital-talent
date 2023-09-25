import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { CompetitionOrderByWithRelationInput } from '../competition/competition-order-by-with-relation.input';
import { ElistOfferOrderByRelationAggregateInput } from '../elist-offer/elist-offer-order-by-relation-aggregate.input';

@InputType()
export class ElistOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  applicant_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  competition_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  rank?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  updated_at?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  deleted_at?: SortOrderInput;

  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  applicant?: UserOrderByWithRelationInput;

  @Field(() => CompetitionOrderByWithRelationInput, { nullable: true })
  competition?: CompetitionOrderByWithRelationInput;

  @Field(() => ElistOfferOrderByRelationAggregateInput, { nullable: true })
  ElistOffer?: ElistOfferOrderByRelationAggregateInput;
}
