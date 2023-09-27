import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OpportunityWhereInput } from './opportunity-where.input';
import { OpportunityOrderByWithRelationInput } from './opportunity-order-by-with-relation.input';
import { OpportunityWhereUniqueInput } from './opportunity-where-unique.input';
import { OpportunityCountAggregateInput } from './opportunity-count-aggregate.input';
import { OpportunityMinAggregateInput } from './opportunity-min-aggregate.input';
import { OpportunityMaxAggregateInput } from './opportunity-max-aggregate.input';

@ArgsType()
export class OpportunityAggregateArgs {
  @Field(() => OpportunityWhereInput, { nullable: true })
  @Type(() => OpportunityWhereInput)
  where?: OpportunityWhereInput;

  @Field(() => [OpportunityOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<OpportunityOrderByWithRelationInput>;

  @Field(() => OpportunityWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<OpportunityWhereUniqueInput, 'id'>;

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
