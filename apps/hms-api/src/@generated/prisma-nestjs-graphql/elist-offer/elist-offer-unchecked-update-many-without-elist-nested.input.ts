import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ElistOfferCreateWithoutElistInput } from './elist-offer-create-without-elist.input';
import { ElistOfferCreateOrConnectWithoutElistInput } from './elist-offer-create-or-connect-without-elist.input';
import { ElistOfferUpsertWithWhereUniqueWithoutElistInput } from './elist-offer-upsert-with-where-unique-without-elist.input';
import { ElistOfferCreateManyElistInputEnvelope } from './elist-offer-create-many-elist-input-envelope.input';
import { ElistOfferWhereUniqueInput } from './elist-offer-where-unique.input';
import { ElistOfferUpdateWithWhereUniqueWithoutElistInput } from './elist-offer-update-with-where-unique-without-elist.input';
import { ElistOfferUpdateManyWithWhereWithoutElistInput } from './elist-offer-update-many-with-where-without-elist.input';
import { ElistOfferScalarWhereInput } from './elist-offer-scalar-where.input';

@InputType()
export class ElistOfferUncheckedUpdateManyWithoutElistNestedInput {
  @Field(() => [ElistOfferCreateWithoutElistInput], { nullable: true })
  @Type(() => ElistOfferCreateWithoutElistInput)
  create?: Array<ElistOfferCreateWithoutElistInput>;

  @Field(() => [ElistOfferCreateOrConnectWithoutElistInput], { nullable: true })
  @Type(() => ElistOfferCreateOrConnectWithoutElistInput)
  connectOrCreate?: Array<ElistOfferCreateOrConnectWithoutElistInput>;

  @Field(() => [ElistOfferUpsertWithWhereUniqueWithoutElistInput], { nullable: true })
  @Type(() => ElistOfferUpsertWithWhereUniqueWithoutElistInput)
  upsert?: Array<ElistOfferUpsertWithWhereUniqueWithoutElistInput>;

  @Field(() => ElistOfferCreateManyElistInputEnvelope, { nullable: true })
  @Type(() => ElistOfferCreateManyElistInputEnvelope)
  createMany?: ElistOfferCreateManyElistInputEnvelope;

  @Field(() => [ElistOfferWhereUniqueInput], { nullable: true })
  @Type(() => ElistOfferWhereUniqueInput)
  set?: Array<Prisma.AtLeast<ElistOfferWhereUniqueInput, 'id'>>;

  @Field(() => [ElistOfferWhereUniqueInput], { nullable: true })
  @Type(() => ElistOfferWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<ElistOfferWhereUniqueInput, 'id'>>;

  @Field(() => [ElistOfferWhereUniqueInput], { nullable: true })
  @Type(() => ElistOfferWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<ElistOfferWhereUniqueInput, 'id'>>;

  @Field(() => [ElistOfferWhereUniqueInput], { nullable: true })
  @Type(() => ElistOfferWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ElistOfferWhereUniqueInput, 'id'>>;

  @Field(() => [ElistOfferUpdateWithWhereUniqueWithoutElistInput], { nullable: true })
  @Type(() => ElistOfferUpdateWithWhereUniqueWithoutElistInput)
  update?: Array<ElistOfferUpdateWithWhereUniqueWithoutElistInput>;

  @Field(() => [ElistOfferUpdateManyWithWhereWithoutElistInput], { nullable: true })
  @Type(() => ElistOfferUpdateManyWithWhereWithoutElistInput)
  updateMany?: Array<ElistOfferUpdateManyWithWhereWithoutElistInput>;

  @Field(() => [ElistOfferScalarWhereInput], { nullable: true })
  @Type(() => ElistOfferScalarWhereInput)
  deleteMany?: Array<ElistOfferScalarWhereInput>;
}
