import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ElistOfferWhereUniqueInput } from './elist-offer-where-unique.input';
import { ElistOfferUpdateWithoutOpportunityInput } from './elist-offer-update-without-opportunity.input';
import { ElistOfferCreateWithoutOpportunityInput } from './elist-offer-create-without-opportunity.input';

@InputType()
export class ElistOfferUpsertWithWhereUniqueWithoutOpportunityInput {
  @Field(() => ElistOfferWhereUniqueInput, { nullable: false })
  @Type(() => ElistOfferWhereUniqueInput)
  where!: Prisma.AtLeast<ElistOfferWhereUniqueInput, 'id'>;

  @Field(() => ElistOfferUpdateWithoutOpportunityInput, { nullable: false })
  @Type(() => ElistOfferUpdateWithoutOpportunityInput)
  update!: ElistOfferUpdateWithoutOpportunityInput;

  @Field(() => ElistOfferCreateWithoutOpportunityInput, { nullable: false })
  @Type(() => ElistOfferCreateWithoutOpportunityInput)
  create!: ElistOfferCreateWithoutOpportunityInput;
}
