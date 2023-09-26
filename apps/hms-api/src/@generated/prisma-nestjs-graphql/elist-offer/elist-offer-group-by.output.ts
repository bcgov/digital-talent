import { Field, ObjectType } from '@nestjs/graphql';
import { ElistOfferCountAggregate } from './elist-offer-count-aggregate.output';
import { ElistOfferMinAggregate } from './elist-offer-min-aggregate.output';
import { ElistOfferMaxAggregate } from './elist-offer-max-aggregate.output';

@ObjectType()
export class ElistOfferGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  elist_id!: string;

  @Field(() => String, { nullable: false })
  opportunity_id!: string;

  @Field(() => Boolean, { nullable: false })
  is_accepted!: boolean;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => ElistOfferCountAggregate, { nullable: true })
  _count?: ElistOfferCountAggregate;

  @Field(() => ElistOfferMinAggregate, { nullable: true })
  _min?: ElistOfferMinAggregate;

  @Field(() => ElistOfferMaxAggregate, { nullable: true })
  _max?: ElistOfferMaxAggregate;
}
