import { Field, ObjectType } from '@nestjs/graphql';
import { LocationCountAggregate } from './location-count-aggregate.output';
import { LocationAvgAggregate } from './location-avg-aggregate.output';
import { LocationSumAggregate } from './location-sum-aggregate.output';
import { LocationMinAggregate } from './location-min-aggregate.output';
import { LocationMaxAggregate } from './location-max-aggregate.output';

@ObjectType()
export class AggregateLocation {
  @Field(() => LocationCountAggregate, { nullable: true })
  _count?: LocationCountAggregate;

  @Field(() => LocationAvgAggregate, { nullable: true })
  _avg?: LocationAvgAggregate;

  @Field(() => LocationSumAggregate, { nullable: true })
  _sum?: LocationSumAggregate;

  @Field(() => LocationMinAggregate, { nullable: true })
  _min?: LocationMinAggregate;

  @Field(() => LocationMaxAggregate, { nullable: true })
  _max?: LocationMaxAggregate;
}
