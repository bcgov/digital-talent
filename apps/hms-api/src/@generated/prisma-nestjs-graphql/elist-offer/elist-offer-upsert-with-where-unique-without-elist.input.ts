import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ElistOfferWhereUniqueInput } from './elist-offer-where-unique.input';
import { ElistOfferUpdateWithoutElistInput } from './elist-offer-update-without-elist.input';
import { ElistOfferCreateWithoutElistInput } from './elist-offer-create-without-elist.input';

@InputType()
export class ElistOfferUpsertWithWhereUniqueWithoutElistInput {
  @Field(() => ElistOfferWhereUniqueInput, { nullable: false })
  @Type(() => ElistOfferWhereUniqueInput)
  where!: Prisma.AtLeast<ElistOfferWhereUniqueInput, 'id'>;

  @Field(() => ElistOfferUpdateWithoutElistInput, { nullable: false })
  @Type(() => ElistOfferUpdateWithoutElistInput)
  update!: ElistOfferUpdateWithoutElistInput;

  @Field(() => ElistOfferCreateWithoutElistInput, { nullable: false })
  @Type(() => ElistOfferCreateWithoutElistInput)
  create!: ElistOfferCreateWithoutElistInput;
}
