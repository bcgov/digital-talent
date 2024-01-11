import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ElistOfferCreateManyOpportunityInput } from './elist-offer-create-many-opportunity.input';

@InputType()
export class ElistOfferCreateManyOpportunityInputEnvelope {
  @Field(() => [ElistOfferCreateManyOpportunityInput], { nullable: false })
  @Type(() => ElistOfferCreateManyOpportunityInput)
  data!: Array<ElistOfferCreateManyOpportunityInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
