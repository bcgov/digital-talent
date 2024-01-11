import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ElistOfferWhereInput } from './elist-offer-where.input';
import { ElistOfferOrderByWithAggregationInput } from './elist-offer-order-by-with-aggregation.input';
import { ElistOfferScalarFieldEnum } from './elist-offer-scalar-field.enum';
import { ElistOfferScalarWhereWithAggregatesInput } from './elist-offer-scalar-where-with-aggregates.input';
import { ElistOfferCountAggregateInput } from './elist-offer-count-aggregate.input';
import { ElistOfferMinAggregateInput } from './elist-offer-min-aggregate.input';
import { ElistOfferMaxAggregateInput } from './elist-offer-max-aggregate.input';

@ArgsType()
export class ElistOfferGroupByArgs {
  @Field(() => ElistOfferWhereInput, { nullable: true })
  @Type(() => ElistOfferWhereInput)
  where?: ElistOfferWhereInput;

  @Field(() => [ElistOfferOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<ElistOfferOrderByWithAggregationInput>;

  @Field(() => [ElistOfferScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof ElistOfferScalarFieldEnum>;

  @Field(() => ElistOfferScalarWhereWithAggregatesInput, { nullable: true })
  having?: ElistOfferScalarWhereWithAggregatesInput;

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
