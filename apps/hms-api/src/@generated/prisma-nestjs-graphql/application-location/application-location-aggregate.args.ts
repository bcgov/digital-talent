import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ApplicationLocationWhereInput } from './application-location-where.input';
import { ApplicationLocationOrderByWithRelationInput } from './application-location-order-by-with-relation.input';
import { ApplicationLocationWhereUniqueInput } from './application-location-where-unique.input';
import { ApplicationLocationCountAggregateInput } from './application-location-count-aggregate.input';
import { ApplicationLocationAvgAggregateInput } from './application-location-avg-aggregate.input';
import { ApplicationLocationSumAggregateInput } from './application-location-sum-aggregate.input';
import { ApplicationLocationMinAggregateInput } from './application-location-min-aggregate.input';
import { ApplicationLocationMaxAggregateInput } from './application-location-max-aggregate.input';

@ArgsType()
export class ApplicationLocationAggregateArgs {
  @Field(() => ApplicationLocationWhereInput, { nullable: true })
  @Type(() => ApplicationLocationWhereInput)
  where?: ApplicationLocationWhereInput;

  @Field(() => [ApplicationLocationOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ApplicationLocationOrderByWithRelationInput>;

  @Field(() => ApplicationLocationWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<ApplicationLocationWhereUniqueInput, 'application_id_location_id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => ApplicationLocationCountAggregateInput, { nullable: true })
  _count?: ApplicationLocationCountAggregateInput;

  @Field(() => ApplicationLocationAvgAggregateInput, { nullable: true })
  _avg?: ApplicationLocationAvgAggregateInput;

  @Field(() => ApplicationLocationSumAggregateInput, { nullable: true })
  _sum?: ApplicationLocationSumAggregateInput;

  @Field(() => ApplicationLocationMinAggregateInput, { nullable: true })
  _min?: ApplicationLocationMinAggregateInput;

  @Field(() => ApplicationLocationMaxAggregateInput, { nullable: true })
  _max?: ApplicationLocationMaxAggregateInput;
}
