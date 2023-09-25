import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OpportunityUpdateWithoutElistOfferInput } from './opportunity-update-without-elist-offer.input';
import { OpportunityCreateWithoutElistOfferInput } from './opportunity-create-without-elist-offer.input';
import { OpportunityWhereInput } from './opportunity-where.input';

@InputType()
export class OpportunityUpsertWithoutElistOfferInput {
  @Field(() => OpportunityUpdateWithoutElistOfferInput, { nullable: false })
  @Type(() => OpportunityUpdateWithoutElistOfferInput)
  update!: OpportunityUpdateWithoutElistOfferInput;

  @Field(() => OpportunityCreateWithoutElistOfferInput, { nullable: false })
  @Type(() => OpportunityCreateWithoutElistOfferInput)
  create!: OpportunityCreateWithoutElistOfferInput;

  @Field(() => OpportunityWhereInput, { nullable: true })
  @Type(() => OpportunityWhereInput)
  where?: OpportunityWhereInput;
}
