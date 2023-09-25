import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ElistWhereUniqueInput } from './elist-where-unique.input';
import { ElistCreateWithoutElistOfferInput } from './elist-create-without-elist-offer.input';

@InputType()
export class ElistCreateOrConnectWithoutElistOfferInput {
  @Field(() => ElistWhereUniqueInput, { nullable: false })
  @Type(() => ElistWhereUniqueInput)
  where!: Prisma.AtLeast<ElistWhereUniqueInput, 'id'>;

  @Field(() => ElistCreateWithoutElistOfferInput, { nullable: false })
  @Type(() => ElistCreateWithoutElistOfferInput)
  create!: ElistCreateWithoutElistOfferInput;
}
