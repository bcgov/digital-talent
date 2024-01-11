import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ApplicationWhereInput } from './application-where.input';
import { ApplicationOrderByWithRelationInput } from './application-order-by-with-relation.input';
import { ApplicationWhereUniqueInput } from './application-where-unique.input';
import { ApplicationCountAggregateInput } from './application-count-aggregate.input';
import { ApplicationMinAggregateInput } from './application-min-aggregate.input';
import { ApplicationMaxAggregateInput } from './application-max-aggregate.input';

@ArgsType()
export class ApplicationAggregateArgs {
  @Field(() => ApplicationWhereInput, { nullable: true })
  @Type(() => ApplicationWhereInput)
  where?: ApplicationWhereInput;

  @Field(() => [ApplicationOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ApplicationOrderByWithRelationInput>;

  @Field(() => ApplicationWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<ApplicationWhereUniqueInput, 'id'>;

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
