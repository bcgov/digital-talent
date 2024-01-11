import { Field, ObjectType, Float } from '@nestjs/graphql';
import { LocationRegion } from '../prisma/location-region.enum';
import { LocationCountAggregate } from './location-count-aggregate.output';
import { LocationAvgAggregate } from './location-avg-aggregate.output';
import { LocationSumAggregate } from './location-sum-aggregate.output';
import { LocationMinAggregate } from './location-min-aggregate.output';
import { LocationMaxAggregate } from './location-max-aggregate.output';

@ObjectType()
export class LocationGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  deltek_id!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  postal_code!: string;

  @Field(() => Float, { nullable: false })
  lat!: number;

  @Field(() => Float, { nullable: false })
  lon!: number;

  @Field(() => LocationRegion, { nullable: false })
  region!: keyof typeof LocationRegion;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

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
