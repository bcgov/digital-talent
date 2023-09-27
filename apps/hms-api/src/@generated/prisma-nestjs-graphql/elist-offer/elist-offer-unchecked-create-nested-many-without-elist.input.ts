import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ElistOfferCreateWithoutElistInput } from './elist-offer-create-without-elist.input';
import { ElistOfferCreateOrConnectWithoutElistInput } from './elist-offer-create-or-connect-without-elist.input';
import { ElistOfferCreateManyElistInputEnvelope } from './elist-offer-create-many-elist-input-envelope.input';
import { ElistOfferWhereUniqueInput } from './elist-offer-where-unique.input';

@InputType()
export class ElistOfferUncheckedCreateNestedManyWithoutElistInput {
  @Field(() => [ElistOfferCreateWithoutElistInput], { nullable: true })
  @Type(() => ElistOfferCreateWithoutElistInput)
  create?: Array<ElistOfferCreateWithoutElistInput>;

  @Field(() => [ElistOfferCreateOrConnectWithoutElistInput], { nullable: true })
  @Type(() => ElistOfferCreateOrConnectWithoutElistInput)
  connectOrCreate?: Array<ElistOfferCreateOrConnectWithoutElistInput>;

  @Field(() => ElistOfferCreateManyElistInputEnvelope, { nullable: true })
  @Type(() => ElistOfferCreateManyElistInputEnvelope)
  createMany?: ElistOfferCreateManyElistInputEnvelope;

  @Field(() => [ElistOfferWhereUniqueInput], { nullable: true })
  @Type(() => ElistOfferWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ElistOfferWhereUniqueInput, 'id'>>;
}
