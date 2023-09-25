import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OpportunityCreateWithoutElistOfferInput } from './opportunity-create-without-elist-offer.input';
import { OpportunityCreateOrConnectWithoutElistOfferInput } from './opportunity-create-or-connect-without-elist-offer.input';
import { OpportunityWhereUniqueInput } from './opportunity-where-unique.input';

@InputType()
export class OpportunityCreateNestedOneWithoutElistOfferInput {
  @Field(() => OpportunityCreateWithoutElistOfferInput, { nullable: true })
  @Type(() => OpportunityCreateWithoutElistOfferInput)
  create?: OpportunityCreateWithoutElistOfferInput;

  @Field(() => OpportunityCreateOrConnectWithoutElistOfferInput, { nullable: true })
  @Type(() => OpportunityCreateOrConnectWithoutElistOfferInput)
  connectOrCreate?: OpportunityCreateOrConnectWithoutElistOfferInput;

  @Field(() => OpportunityWhereUniqueInput, { nullable: true })
  @Type(() => OpportunityWhereUniqueInput)
  connect?: Prisma.AtLeast<OpportunityWhereUniqueInput, 'id'>;
}
