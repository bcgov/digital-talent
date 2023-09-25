import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OccupationGroupWhereInput } from './occupation-group-where.input';
import { OccupationGroupOrderByWithRelationInput } from './occupation-group-order-by-with-relation.input';
import { OccupationGroupWhereUniqueInput } from './occupation-group-where-unique.input';
import { OccupationGroupCountAggregateInput } from './occupation-group-count-aggregate.input';
import { OccupationGroupMinAggregateInput } from './occupation-group-min-aggregate.input';
import { OccupationGroupMaxAggregateInput } from './occupation-group-max-aggregate.input';

@ArgsType()
export class OccupationGroupAggregateArgs {
  @Field(() => OccupationGroupWhereInput, { nullable: true })
  @Type(() => OccupationGroupWhereInput)
  where?: OccupationGroupWhereInput;

  @Field(() => [OccupationGroupOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<OccupationGroupOrderByWithRelationInput>;

  @Field(() => OccupationGroupWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<OccupationGroupWhereUniqueInput, 'id' | 'code' | 'code'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => OccupationGroupCountAggregateInput, { nullable: true })
  _count?: OccupationGroupCountAggregateInput;

  @Field(() => OccupationGroupMinAggregateInput, { nullable: true })
  _min?: OccupationGroupMinAggregateInput;

  @Field(() => OccupationGroupMaxAggregateInput, { nullable: true })
  _max?: OccupationGroupMaxAggregateInput;
}
