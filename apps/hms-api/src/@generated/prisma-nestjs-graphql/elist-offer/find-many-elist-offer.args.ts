import { Field, ArgsType, HideField, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ElistOfferWhereInput } from './elist-offer-where.input';
import { ElistOfferOrderByWithRelationInput } from './elist-offer-order-by-with-relation.input';
import { ElistOfferWhereUniqueInput } from './elist-offer-where-unique.input';
import { ElistOfferScalarFieldEnum } from './elist-offer-scalar-field.enum';

@ArgsType()
export class FindManyElistOfferArgs {
  @Field(() => ElistOfferWhereInput, { nullable: true })
  @Type(() => ElistOfferWhereInput)
  where?: ElistOfferWhereInput;

  @Field(() => [ElistOfferOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ElistOfferOrderByWithRelationInput>;

  @HideField()
  cursor?: Prisma.AtLeast<ElistOfferWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @HideField()
  distinct?: Array<keyof typeof ElistOfferScalarFieldEnum>;
}
