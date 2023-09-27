import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ElistOfferWhereInput } from './elist-offer-where.input';
import { ElistOfferOrderByWithRelationInput } from './elist-offer-order-by-with-relation.input';
import { ElistOfferWhereUniqueInput } from './elist-offer-where-unique.input';
import { ElistOfferScalarFieldEnum } from './elist-offer-scalar-field.enum';

@ArgsType()
export class FindFirstElistOfferOrThrowArgs {
  @Field(() => ElistOfferWhereInput, { nullable: true })
  @Type(() => ElistOfferWhereInput)
  where?: ElistOfferWhereInput;

  @Field(() => [ElistOfferOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ElistOfferOrderByWithRelationInput>;

  @Field(() => ElistOfferWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<ElistOfferWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [ElistOfferScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ElistOfferScalarFieldEnum>;
}
