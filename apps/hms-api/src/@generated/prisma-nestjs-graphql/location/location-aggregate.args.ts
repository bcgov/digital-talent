import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { LocationWhereInput } from './location-where.input';
import { LocationOrderByWithRelationInput } from './location-order-by-with-relation.input';
import { LocationWhereUniqueInput } from './location-where-unique.input';
import { LocationCountAggregateInput } from './location-count-aggregate.input';
import { LocationAvgAggregateInput } from './location-avg-aggregate.input';
import { LocationSumAggregateInput } from './location-sum-aggregate.input';
import { LocationMinAggregateInput } from './location-min-aggregate.input';
import { LocationMaxAggregateInput } from './location-max-aggregate.input';

@ArgsType()
export class LocationAggregateArgs {
  @Field(() => LocationWhereInput, { nullable: true })
  @Type(() => LocationWhereInput)
  where?: LocationWhereInput;

  @Field(() => [LocationOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<LocationOrderByWithRelationInput>;

  @Field(() => LocationWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<LocationWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => LocationCountAggregateInput, { nullable: true })
  _count?: LocationCountAggregateInput;

  @Field(() => LocationAvgAggregateInput, { nullable: true })
  _avg?: LocationAvgAggregateInput;

  @Field(() => LocationSumAggregateInput, { nullable: true })
  _sum?: LocationSumAggregateInput;

  @Field(() => LocationMinAggregateInput, { nullable: true })
  _min?: LocationMinAggregateInput;

  @Field(() => LocationMaxAggregateInput, { nullable: true })
  _max?: LocationMaxAggregateInput;
}
