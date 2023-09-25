import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ElistOfferWhereUniqueInput } from './elist-offer-where-unique.input';
import { ElistOfferUpdateWithoutElistInput } from './elist-offer-update-without-elist.input';

@InputType()
export class ElistOfferUpdateWithWhereUniqueWithoutElistInput {
  @Field(() => ElistOfferWhereUniqueInput, { nullable: false })
  @Type(() => ElistOfferWhereUniqueInput)
  where!: Prisma.AtLeast<ElistOfferWhereUniqueInput, 'id'>;

  @Field(() => ElistOfferUpdateWithoutElistInput, { nullable: false })
  @Type(() => ElistOfferUpdateWithoutElistInput)
  data!: ElistOfferUpdateWithoutElistInput;
}
