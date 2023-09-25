import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ElistOfferCreateWithoutOpportunityInput } from './elist-offer-create-without-opportunity.input';
import { ElistOfferCreateOrConnectWithoutOpportunityInput } from './elist-offer-create-or-connect-without-opportunity.input';
import { ElistOfferCreateManyOpportunityInputEnvelope } from './elist-offer-create-many-opportunity-input-envelope.input';
import { ElistOfferWhereUniqueInput } from './elist-offer-where-unique.input';

@InputType()
export class ElistOfferCreateNestedManyWithoutOpportunityInput {
  @Field(() => [ElistOfferCreateWithoutOpportunityInput], { nullable: true })
  @Type(() => ElistOfferCreateWithoutOpportunityInput)
  create?: Array<ElistOfferCreateWithoutOpportunityInput>;

  @Field(() => [ElistOfferCreateOrConnectWithoutOpportunityInput], { nullable: true })
  @Type(() => ElistOfferCreateOrConnectWithoutOpportunityInput)
  connectOrCreate?: Array<ElistOfferCreateOrConnectWithoutOpportunityInput>;

  @Field(() => ElistOfferCreateManyOpportunityInputEnvelope, { nullable: true })
  @Type(() => ElistOfferCreateManyOpportunityInputEnvelope)
  createMany?: ElistOfferCreateManyOpportunityInputEnvelope;

  @Field(() => [ElistOfferWhereUniqueInput], { nullable: true })
  @Type(() => ElistOfferWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ElistOfferWhereUniqueInput, 'id'>>;
}
