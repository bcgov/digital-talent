import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ElistOfferUpdateInput } from './elist-offer-update.input';
import { ElistOfferWhereUniqueInput } from './elist-offer-where-unique.input';

@ArgsType()
export class UpdateOneElistOfferArgs {
  @Field(() => ElistOfferUpdateInput, { nullable: false })
  @Type(() => ElistOfferUpdateInput)
  data!: ElistOfferUpdateInput;

  @Field(() => ElistOfferWhereUniqueInput, { nullable: false })
  @Type(() => ElistOfferWhereUniqueInput)
  where!: Prisma.AtLeast<ElistOfferWhereUniqueInput, 'id'>;
}
