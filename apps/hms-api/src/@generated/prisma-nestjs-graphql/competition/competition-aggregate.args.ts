import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CompetitionWhereInput } from './competition-where.input';
import { CompetitionOrderByWithRelationInput } from './competition-order-by-with-relation.input';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';
import { CompetitionCountAggregateInput } from './competition-count-aggregate.input';
import { CompetitionMinAggregateInput } from './competition-min-aggregate.input';
import { CompetitionMaxAggregateInput } from './competition-max-aggregate.input';

@ArgsType()
export class CompetitionAggregateArgs {
  @Field(() => CompetitionWhereInput, { nullable: true })
  @Type(() => CompetitionWhereInput)
  where?: CompetitionWhereInput;

  @Field(() => [CompetitionOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<CompetitionOrderByWithRelationInput>;

  @Field(() => CompetitionWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<CompetitionWhereUniqueInput, 'id'>;

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
