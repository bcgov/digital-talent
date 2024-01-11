import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ApplicationLocationWhereInput } from './application-location-where.input';
import { ApplicationLocationOrderByWithAggregationInput } from './application-location-order-by-with-aggregation.input';
import { ApplicationLocationScalarFieldEnum } from './application-location-scalar-field.enum';
import { ApplicationLocationScalarWhereWithAggregatesInput } from './application-location-scalar-where-with-aggregates.input';
import { ApplicationLocationCountAggregateInput } from './application-location-count-aggregate.input';
import { ApplicationLocationAvgAggregateInput } from './application-location-avg-aggregate.input';
import { ApplicationLocationSumAggregateInput } from './application-location-sum-aggregate.input';
import { ApplicationLocationMinAggregateInput } from './application-location-min-aggregate.input';
import { ApplicationLocationMaxAggregateInput } from './application-location-max-aggregate.input';

@ArgsType()
export class ApplicationLocationGroupByArgs {
  @Field(() => ApplicationLocationWhereInput, { nullable: true })
  @Type(() => ApplicationLocationWhereInput)
  where?: ApplicationLocationWhereInput;

  @Field(() => [ApplicationLocationOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<ApplicationLocationOrderByWithAggregationInput>;

  @Field(() => [ApplicationLocationScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof ApplicationLocationScalarFieldEnum>;

  @Field(() => ApplicationLocationScalarWhereWithAggregatesInput, { nullable: true })
  having?: ApplicationLocationScalarWhereWithAggregatesInput;

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
