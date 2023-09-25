import { Field, ObjectType, Int } from '@nestjs/graphql';
import { ApplicationLocationCountAggregate } from './application-location-count-aggregate.output';
import { ApplicationLocationAvgAggregate } from './application-location-avg-aggregate.output';
import { ApplicationLocationSumAggregate } from './application-location-sum-aggregate.output';
import { ApplicationLocationMinAggregate } from './application-location-min-aggregate.output';
import { ApplicationLocationMaxAggregate } from './application-location-max-aggregate.output';

@ObjectType()
export class ApplicationLocationGroupBy {
  @Field(() => String, { nullable: false })
  application_id!: string;

  @Field(() => String, { nullable: false })
  location_id!: string;

  @Field(() => Int, { nullable: false })
  rank!: number;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

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
