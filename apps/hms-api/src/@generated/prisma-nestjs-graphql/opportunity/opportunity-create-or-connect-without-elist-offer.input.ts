import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { OpportunityWhereUniqueInput } from './opportunity-where-unique.input';
import { OpportunityCreateWithoutElistOfferInput } from './opportunity-create-without-elist-offer.input';

@InputType()
export class OpportunityCreateOrConnectWithoutElistOfferInput {
  @Field(() => OpportunityWhereUniqueInput, { nullable: false })
  @Type(() => OpportunityWhereUniqueInput)
  where!: Prisma.AtLeast<OpportunityWhereUniqueInput, 'id'>;

  @Field(() => OpportunityCreateWithoutElistOfferInput, { nullable: false })
  @Type(() => OpportunityCreateWithoutElistOfferInput)
  create!: OpportunityCreateWithoutElistOfferInput;
}
