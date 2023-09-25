import { Field, ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ElistOfferWhereUniqueInput } from './elist-offer-where-unique.input';

@ArgsType()
export class FindUniqueElistOfferOrThrowArgs {
  @Field(() => ElistOfferWhereUniqueInput, { nullable: false })
  @Type(() => ElistOfferWhereUniqueInput)
  where!: Prisma.AtLeast<ElistOfferWhereUniqueInput, 'id'>;
}
