import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ElistWhereInput } from './elist-where.input';
import { ElistOrderByWithAggregationInput } from './elist-order-by-with-aggregation.input';
import { ElistScalarFieldEnum } from './elist-scalar-field.enum';
import { ElistScalarWhereWithAggregatesInput } from './elist-scalar-where-with-aggregates.input';
import { ElistCountAggregateInput } from './elist-count-aggregate.input';
import { ElistAvgAggregateInput } from './elist-avg-aggregate.input';
import { ElistSumAggregateInput } from './elist-sum-aggregate.input';
import { ElistMinAggregateInput } from './elist-min-aggregate.input';
import { ElistMaxAggregateInput } from './elist-max-aggregate.input';

@ArgsType()
export class ElistGroupByArgs {
  @Field(() => ElistWhereInput, { nullable: true })
  @Type(() => ElistWhereInput)
  where?: ElistWhereInput;

  @Field(() => [ElistOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<ElistOrderByWithAggregationInput>;

  @Field(() => [ElistScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof ElistScalarFieldEnum>;

  @Field(() => ElistScalarWhereWithAggregatesInput, { nullable: true })
  having?: ElistScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => ElistCountAggregateInput, { nullable: true })
  _count?: ElistCountAggregateInput;

  @Field(() => ElistAvgAggregateInput, { nullable: true })
  _avg?: ElistAvgAggregateInput;

  @Field(() => ElistSumAggregateInput, { nullable: true })
  _sum?: ElistSumAggregateInput;

  @Field(() => ElistMinAggregateInput, { nullable: true })
  _min?: ElistMinAggregateInput;

  @Field(() => ElistMaxAggregateInput, { nullable: true })
  _max?: ElistMaxAggregateInput;
}
