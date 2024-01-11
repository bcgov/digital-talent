import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ElistOfferWhereInput } from './elist-offer-where.input';
import { ElistOfferOrderByWithRelationInput } from './elist-offer-order-by-with-relation.input';
import { ElistOfferWhereUniqueInput } from './elist-offer-where-unique.input';
import { ElistOfferCountAggregateInput } from './elist-offer-count-aggregate.input';
import { ElistOfferMinAggregateInput } from './elist-offer-min-aggregate.input';
import { ElistOfferMaxAggregateInput } from './elist-offer-max-aggregate.input';

@ArgsType()
export class ElistOfferAggregateArgs {
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

  @Field(() => ElistOfferCountAggregateInput, { nullable: true })
  _count?: ElistOfferCountAggregateInput;

  @Field(() => ElistOfferMinAggregateInput, { nullable: true })
  _min?: ElistOfferMinAggregateInput;

  @Field(() => ElistOfferMaxAggregateInput, { nullable: true })
  _max?: ElistOfferMaxAggregateInput;
}
