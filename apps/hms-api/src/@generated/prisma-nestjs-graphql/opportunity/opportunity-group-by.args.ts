import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OpportunityWhereInput } from './opportunity-where.input';
import { OpportunityOrderByWithAggregationInput } from './opportunity-order-by-with-aggregation.input';
import { OpportunityScalarFieldEnum } from './opportunity-scalar-field.enum';
import { OpportunityScalarWhereWithAggregatesInput } from './opportunity-scalar-where-with-aggregates.input';
import { OpportunityCountAggregateInput } from './opportunity-count-aggregate.input';
import { OpportunityMinAggregateInput } from './opportunity-min-aggregate.input';
import { OpportunityMaxAggregateInput } from './opportunity-max-aggregate.input';

@ArgsType()
export class OpportunityGroupByArgs {
  @Field(() => OpportunityWhereInput, { nullable: true })
  @Type(() => OpportunityWhereInput)
  where?: OpportunityWhereInput;

  @Field(() => [OpportunityOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<OpportunityOrderByWithAggregationInput>;

  @Field(() => [OpportunityScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof OpportunityScalarFieldEnum>;

  @Field(() => OpportunityScalarWhereWithAggregatesInput, { nullable: true })
  having?: OpportunityScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => OpportunityCountAggregateInput, { nullable: true })
  _count?: OpportunityCountAggregateInput;

  @Field(() => OpportunityMinAggregateInput, { nullable: true })
  _min?: OpportunityMinAggregateInput;

  @Field(() => OpportunityMaxAggregateInput, { nullable: true })
  _max?: OpportunityMaxAggregateInput;
}
