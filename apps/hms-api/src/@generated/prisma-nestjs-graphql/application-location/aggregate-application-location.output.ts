import { Field, ObjectType } from '@nestjs/graphql';
import { ApplicationLocationCountAggregate } from './application-location-count-aggregate.output';
import { ApplicationLocationAvgAggregate } from './application-location-avg-aggregate.output';
import { ApplicationLocationSumAggregate } from './application-location-sum-aggregate.output';
import { ApplicationLocationMinAggregate } from './application-location-min-aggregate.output';
import { ApplicationLocationMaxAggregate } from './application-location-max-aggregate.output';

@ObjectType()
export class AggregateApplicationLocation {
  @Field(() => ApplicationLocationCountAggregate, { nullable: true })
  _count?: ApplicationLocationCountAggregate;

  @Field(() => ApplicationLocationAvgAggregate, { nullable: true })
  _avg?: ApplicationLocationAvgAggregate;

  @Field(() => ApplicationLocationSumAggregate, { nullable: true })
  _sum?: ApplicationLocationSumAggregate;

  @Field(() => ApplicationLocationMinAggregate, { nullable: true })
  _min?: ApplicationLocationMinAggregate;

  @Field(() => ApplicationLocationMaxAggregate, { nullable: true })
  _max?: ApplicationLocationMaxAggregate;
}
