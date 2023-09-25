import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ElistOfferWhereUniqueInput } from './elist-offer-where-unique.input';
import { ElistOfferCreateWithoutOpportunityInput } from './elist-offer-create-without-opportunity.input';

@InputType()
export class ElistOfferCreateOrConnectWithoutOpportunityInput {
  @Field(() => ElistOfferWhereUniqueInput, { nullable: false })
  @Type(() => ElistOfferWhereUniqueInput)
  where!: Prisma.AtLeast<ElistOfferWhereUniqueInput, 'id'>;

  @Field(() => ElistOfferCreateWithoutOpportunityInput, { nullable: false })
  @Type(() => ElistOfferCreateWithoutOpportunityInput)
  create!: ElistOfferCreateWithoutOpportunityInput;
}
