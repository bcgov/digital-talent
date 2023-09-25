import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OpportunityLocationWhereInput } from './opportunity-location-where.input';
import { OpportunityLocationOrderByWithAggregationInput } from './opportunity-location-order-by-with-aggregation.input';
import { OpportunityLocationScalarFieldEnum } from './opportunity-location-scalar-field.enum';
import { OpportunityLocationScalarWhereWithAggregatesInput } from './opportunity-location-scalar-where-with-aggregates.input';
import { OpportunityLocationCountAggregateInput } from './opportunity-location-count-aggregate.input';
import { OpportunityLocationMinAggregateInput } from './opportunity-location-min-aggregate.input';
import { OpportunityLocationMaxAggregateInput } from './opportunity-location-max-aggregate.input';

@ArgsType()
export class OpportunityLocationGroupByArgs {
  @Field(() => OpportunityLocationWhereInput, { nullable: true })
  @Type(() => OpportunityLocationWhereInput)
  where?: OpportunityLocationWhereInput;

  @Field(() => [OpportunityLocationOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<OpportunityLocationOrderByWithAggregationInput>;

  @Field(() => [OpportunityLocationScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof OpportunityLocationScalarFieldEnum>;

  @Field(() => OpportunityLocationScalarWhereWithAggregatesInput, { nullable: true })
  having?: OpportunityLocationScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => OpportunityLocationCountAggregateInput, { nullable: true })
  _count?: OpportunityLocationCountAggregateInput;

  @Field(() => OpportunityLocationMinAggregateInput, { nullable: true })
  _min?: OpportunityLocationMinAggregateInput;

  @Field(() => OpportunityLocationMaxAggregateInput, { nullable: true })
  _max?: OpportunityLocationMaxAggregateInput;
}
