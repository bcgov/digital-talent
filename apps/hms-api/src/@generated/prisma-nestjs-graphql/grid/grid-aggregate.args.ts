import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { GridWhereInput } from './grid-where.input';
import { GridOrderByWithRelationInput } from './grid-order-by-with-relation.input';
import { GridWhereUniqueInput } from './grid-where-unique.input';
import { GridCountAggregateInput } from './grid-count-aggregate.input';
import { GridMinAggregateInput } from './grid-min-aggregate.input';
import { GridMaxAggregateInput } from './grid-max-aggregate.input';

@ArgsType()
export class GridAggregateArgs {
  @Field(() => GridWhereInput, { nullable: true })
  @Type(() => GridWhereInput)
  where?: GridWhereInput;

  @Field(() => [GridOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<GridOrderByWithRelationInput>;

  @Field(() => GridWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<GridWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => GridCountAggregateInput, { nullable: true })
  _count?: GridCountAggregateInput;

  @Field(() => GridMinAggregateInput, { nullable: true })
  _min?: GridMinAggregateInput;

  @Field(() => GridMaxAggregateInput, { nullable: true })
  _max?: GridMaxAggregateInput;
}
