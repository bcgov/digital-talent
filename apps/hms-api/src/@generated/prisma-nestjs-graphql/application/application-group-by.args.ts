import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ApplicationWhereInput } from './application-where.input';
import { ApplicationOrderByWithAggregationInput } from './application-order-by-with-aggregation.input';
import { ApplicationScalarFieldEnum } from './application-scalar-field.enum';
import { ApplicationScalarWhereWithAggregatesInput } from './application-scalar-where-with-aggregates.input';
import { ApplicationCountAggregateInput } from './application-count-aggregate.input';
import { ApplicationMinAggregateInput } from './application-min-aggregate.input';
import { ApplicationMaxAggregateInput } from './application-max-aggregate.input';

@ArgsType()
export class ApplicationGroupByArgs {
  @Field(() => ApplicationWhereInput, { nullable: true })
  @Type(() => ApplicationWhereInput)
  where?: ApplicationWhereInput;

  @Field(() => [ApplicationOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<ApplicationOrderByWithAggregationInput>;

  @Field(() => [ApplicationScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof ApplicationScalarFieldEnum>;

  @Field(() => ApplicationScalarWhereWithAggregatesInput, { nullable: true })
  having?: ApplicationScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => ApplicationCountAggregateInput, { nullable: true })
  _count?: ApplicationCountAggregateInput;

  @Field(() => ApplicationMinAggregateInput, { nullable: true })
  _min?: ApplicationMinAggregateInput;

  @Field(() => ApplicationMaxAggregateInput, { nullable: true })
  _max?: ApplicationMaxAggregateInput;
}
