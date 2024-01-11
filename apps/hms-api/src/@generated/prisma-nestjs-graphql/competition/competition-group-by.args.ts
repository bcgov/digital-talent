import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CompetitionWhereInput } from './competition-where.input';
import { CompetitionOrderByWithAggregationInput } from './competition-order-by-with-aggregation.input';
import { CompetitionScalarFieldEnum } from './competition-scalar-field.enum';
import { CompetitionScalarWhereWithAggregatesInput } from './competition-scalar-where-with-aggregates.input';
import { CompetitionCountAggregateInput } from './competition-count-aggregate.input';
import { CompetitionMinAggregateInput } from './competition-min-aggregate.input';
import { CompetitionMaxAggregateInput } from './competition-max-aggregate.input';

@ArgsType()
export class CompetitionGroupByArgs {
  @Field(() => CompetitionWhereInput, { nullable: true })
  @Type(() => CompetitionWhereInput)
  where?: CompetitionWhereInput;

  @Field(() => [CompetitionOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<CompetitionOrderByWithAggregationInput>;

  @Field(() => [CompetitionScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof CompetitionScalarFieldEnum>;

  @Field(() => CompetitionScalarWhereWithAggregatesInput, { nullable: true })
  having?: CompetitionScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => CompetitionCountAggregateInput, { nullable: true })
  _count?: CompetitionCountAggregateInput;

  @Field(() => CompetitionMinAggregateInput, { nullable: true })
  _min?: CompetitionMinAggregateInput;

  @Field(() => CompetitionMaxAggregateInput, { nullable: true })
  _max?: CompetitionMaxAggregateInput;
}
