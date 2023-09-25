import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OpportunityCreateWithoutElistOfferInput } from './opportunity-create-without-elist-offer.input';
import { OpportunityCreateOrConnectWithoutElistOfferInput } from './opportunity-create-or-connect-without-elist-offer.input';
import { OpportunityUpsertWithoutElistOfferInput } from './opportunity-upsert-without-elist-offer.input';
import { OpportunityWhereInput } from './opportunity-where.input';
import { OpportunityWhereUniqueInput } from './opportunity-where-unique.input';
import { OpportunityUpdateToOneWithWhereWithoutElistOfferInput } from './opportunity-update-to-one-with-where-without-elist-offer.input';

@InputType()
export class OpportunityUpdateOneWithoutElistOfferNestedInput {
  @Field(() => OpportunityCreateWithoutElistOfferInput, { nullable: true })
  @Type(() => OpportunityCreateWithoutElistOfferInput)
  create?: OpportunityCreateWithoutElistOfferInput;

  @Field(() => OpportunityCreateOrConnectWithoutElistOfferInput, { nullable: true })
  @Type(() => OpportunityCreateOrConnectWithoutElistOfferInput)
  connectOrCreate?: OpportunityCreateOrConnectWithoutElistOfferInput;

  @Field(() => OpportunityUpsertWithoutElistOfferInput, { nullable: true })
  @Type(() => OpportunityUpsertWithoutElistOfferInput)
  upsert?: OpportunityUpsertWithoutElistOfferInput;

  @Field(() => OpportunityWhereInput, { nullable: true })
  @Type(() => OpportunityWhereInput)
  disconnect?: OpportunityWhereInput;

  @Field(() => OpportunityWhereInput, { nullable: true })
  @Type(() => OpportunityWhereInput)
  delete?: OpportunityWhereInput;

  @Field(() => OpportunityWhereUniqueInput, { nullable: true })
  @Type(() => OpportunityWhereUniqueInput)
  connect?: Prisma.AtLeast<OpportunityWhereUniqueInput, 'id'>;

  @Field(() => OpportunityUpdateToOneWithWhereWithoutElistOfferInput, { nullable: true })
  @Type(() => OpportunityUpdateToOneWithWhereWithoutElistOfferInput)
  update?: OpportunityUpdateToOneWithWhereWithoutElistOfferInput;
}
