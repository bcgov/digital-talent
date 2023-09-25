import { Field, InputType } from '@nestjs/graphql';
import { ElistOfferWhereInput } from './elist-offer-where.input';

@InputType()
export class ElistOfferListRelationFilter {
  @Field(() => ElistOfferWhereInput, { nullable: true })
  every?: ElistOfferWhereInput;

  @Field(() => ElistOfferWhereInput, { nullable: true })
  some?: ElistOfferWhereInput;

  @Field(() => ElistOfferWhereInput, { nullable: true })
  none?: ElistOfferWhereInput;
}
