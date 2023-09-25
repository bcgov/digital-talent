import { Field, ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ElistOfferWhereUniqueInput } from './elist-offer-where-unique.input';
import { ElistOfferCreateInput } from './elist-offer-create.input';
import { ElistOfferUpdateInput } from './elist-offer-update.input';

@ArgsType()
export class UpsertOneElistOfferArgs {
  @Field(() => ElistOfferWhereUniqueInput, { nullable: false })
  @Type(() => ElistOfferWhereUniqueInput)
  where!: Prisma.AtLeast<ElistOfferWhereUniqueInput, 'id'>;

  @Field(() => ElistOfferCreateInput, { nullable: false })
  @Type(() => ElistOfferCreateInput)
  create!: ElistOfferCreateInput;

  @Field(() => ElistOfferUpdateInput, { nullable: false })
  @Type(() => ElistOfferUpdateInput)
  update!: ElistOfferUpdateInput;
}
