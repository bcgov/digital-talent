import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ElistOfferCreateWithoutOpportunityInput } from './elist-offer-create-without-opportunity.input';
import { ElistOfferCreateOrConnectWithoutOpportunityInput } from './elist-offer-create-or-connect-without-opportunity.input';
import { ElistOfferUpsertWithWhereUniqueWithoutOpportunityInput } from './elist-offer-upsert-with-where-unique-without-opportunity.input';
import { ElistOfferCreateManyOpportunityInputEnvelope } from './elist-offer-create-many-opportunity-input-envelope.input';
import { ElistOfferWhereUniqueInput } from './elist-offer-where-unique.input';
import { ElistOfferUpdateWithWhereUniqueWithoutOpportunityInput } from './elist-offer-update-with-where-unique-without-opportunity.input';
import { ElistOfferUpdateManyWithWhereWithoutOpportunityInput } from './elist-offer-update-many-with-where-without-opportunity.input';
import { ElistOfferScalarWhereInput } from './elist-offer-scalar-where.input';

@InputType()
export class ElistOfferUncheckedUpdateManyWithoutOpportunityNestedInput {
  @Field(() => [ElistOfferCreateWithoutOpportunityInput], { nullable: true })
  @Type(() => ElistOfferCreateWithoutOpportunityInput)
  create?: Array<ElistOfferCreateWithoutOpportunityInput>;

  @Field(() => [ElistOfferCreateOrConnectWithoutOpportunityInput], { nullable: true })
  @Type(() => ElistOfferCreateOrConnectWithoutOpportunityInput)
  connectOrCreate?: Array<ElistOfferCreateOrConnectWithoutOpportunityInput>;

  @Field(() => [ElistOfferUpsertWithWhereUniqueWithoutOpportunityInput], { nullable: true })
  @Type(() => ElistOfferUpsertWithWhereUniqueWithoutOpportunityInput)
  upsert?: Array<ElistOfferUpsertWithWhereUniqueWithoutOpportunityInput>;

  @Field(() => ElistOfferCreateManyOpportunityInputEnvelope, { nullable: true })
  @Type(() => ElistOfferCreateManyOpportunityInputEnvelope)
  createMany?: ElistOfferCreateManyOpportunityInputEnvelope;

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

  @Field(() => [ElistOfferUpdateWithWhereUniqueWithoutOpportunityInput], { nullable: true })
  @Type(() => ElistOfferUpdateWithWhereUniqueWithoutOpportunityInput)
  update?: Array<ElistOfferUpdateWithWhereUniqueWithoutOpportunityInput>;

  @Field(() => [ElistOfferUpdateManyWithWhereWithoutOpportunityInput], { nullable: true })
  @Type(() => ElistOfferUpdateManyWithWhereWithoutOpportunityInput)
  updateMany?: Array<ElistOfferUpdateManyWithWhereWithoutOpportunityInput>;

  @Field(() => [ElistOfferScalarWhereInput], { nullable: true })
  @Type(() => ElistOfferScalarWhereInput)
  deleteMany?: Array<ElistOfferScalarWhereInput>;
}
