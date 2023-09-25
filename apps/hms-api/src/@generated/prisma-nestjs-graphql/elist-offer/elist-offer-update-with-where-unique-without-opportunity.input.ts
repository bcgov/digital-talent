import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ElistOfferWhereUniqueInput } from './elist-offer-where-unique.input';
import { ElistOfferUpdateWithoutOpportunityInput } from './elist-offer-update-without-opportunity.input';

@InputType()
export class ElistOfferUpdateWithWhereUniqueWithoutOpportunityInput {
  @Field(() => ElistOfferWhereUniqueInput, { nullable: false })
  @Type(() => ElistOfferWhereUniqueInput)
  where!: Prisma.AtLeast<ElistOfferWhereUniqueInput, 'id'>;

  @Field(() => ElistOfferUpdateWithoutOpportunityInput, { nullable: false })
  @Type(() => ElistOfferUpdateWithoutOpportunityInput)
  data!: ElistOfferUpdateWithoutOpportunityInput;
}
