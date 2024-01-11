import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ElistOfferWhereUniqueInput } from './elist-offer-where-unique.input';
import { ElistOfferCreateWithoutElistInput } from './elist-offer-create-without-elist.input';

@InputType()
export class ElistOfferCreateOrConnectWithoutElistInput {
  @Field(() => ElistOfferWhereUniqueInput, { nullable: false })
  @Type(() => ElistOfferWhereUniqueInput)
  where!: Prisma.AtLeast<ElistOfferWhereUniqueInput, 'id'>;

  @Field(() => ElistOfferCreateWithoutElistInput, { nullable: false })
  @Type(() => ElistOfferCreateWithoutElistInput)
  create!: ElistOfferCreateWithoutElistInput;
}
