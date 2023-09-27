import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ElistWhereInput } from './elist-where.input';
import { ElistOrderByWithRelationInput } from './elist-order-by-with-relation.input';
import { ElistWhereUniqueInput } from './elist-where-unique.input';
import { ElistCountAggregateInput } from './elist-count-aggregate.input';
import { ElistAvgAggregateInput } from './elist-avg-aggregate.input';
import { ElistSumAggregateInput } from './elist-sum-aggregate.input';
import { ElistMinAggregateInput } from './elist-min-aggregate.input';
import { ElistMaxAggregateInput } from './elist-max-aggregate.input';

@ArgsType()
export class ElistAggregateArgs {
  @Field(() => ElistWhereInput, { nullable: true })
  @Type(() => ElistWhereInput)
  where?: ElistWhereInput;

  @Field(() => [ElistOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ElistOrderByWithRelationInput>;

  @Field(() => ElistWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<ElistWhereUniqueInput, 'id'>;

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
