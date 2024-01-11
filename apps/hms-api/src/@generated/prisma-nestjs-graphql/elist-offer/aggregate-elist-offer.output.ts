import { Field, ObjectType } from '@nestjs/graphql';
import { ElistOfferCountAggregate } from './elist-offer-count-aggregate.output';
import { ElistOfferMinAggregate } from './elist-offer-min-aggregate.output';
import { ElistOfferMaxAggregate } from './elist-offer-max-aggregate.output';

@ObjectType()
export class AggregateElistOffer {
  @Field(() => ElistOfferCountAggregate, { nullable: true })
  _count?: ElistOfferCountAggregate;

  @Field(() => ElistOfferMinAggregate, { nullable: true })
  _min?: ElistOfferMinAggregate;

  @Field(() => ElistOfferMaxAggregate, { nullable: true })
  _max?: ElistOfferMaxAggregate;
}
