import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OpportunityWhereInput } from './opportunity-where.input';
import { OpportunityUpdateWithoutElistOfferInput } from './opportunity-update-without-elist-offer.input';

@InputType()
export class OpportunityUpdateToOneWithWhereWithoutElistOfferInput {
  @Field(() => OpportunityWhereInput, { nullable: true })
  @Type(() => OpportunityWhereInput)
  where?: OpportunityWhereInput;

  @Field(() => OpportunityUpdateWithoutElistOfferInput, { nullable: false })
  @Type(() => OpportunityUpdateWithoutElistOfferInput)
  data!: OpportunityUpdateWithoutElistOfferInput;
}
