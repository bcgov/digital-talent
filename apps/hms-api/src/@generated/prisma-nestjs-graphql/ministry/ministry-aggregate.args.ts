import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MinistryWhereInput } from './ministry-where.input';
import { MinistryOrderByWithRelationInput } from './ministry-order-by-with-relation.input';
import { MinistryWhereUniqueInput } from './ministry-where-unique.input';
import { MinistryCountAggregateInput } from './ministry-count-aggregate.input';
import { MinistryMinAggregateInput } from './ministry-min-aggregate.input';
import { MinistryMaxAggregateInput } from './ministry-max-aggregate.input';

@ArgsType()
export class MinistryAggregateArgs {
  @Field(() => MinistryWhereInput, { nullable: true })
  @Type(() => MinistryWhereInput)
  where?: MinistryWhereInput;

  @Field(() => [MinistryOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<MinistryOrderByWithRelationInput>;

  @Field(() => MinistryWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<MinistryWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => MinistryCountAggregateInput, { nullable: true })
  _count?: MinistryCountAggregateInput;

  @Field(() => MinistryMinAggregateInput, { nullable: true })
  _min?: MinistryMinAggregateInput;

  @Field(() => MinistryMaxAggregateInput, { nullable: true })
  _max?: MinistryMaxAggregateInput;
}
