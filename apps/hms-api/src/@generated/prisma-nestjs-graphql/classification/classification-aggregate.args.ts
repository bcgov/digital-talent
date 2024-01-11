import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ClassificationWhereInput } from './classification-where.input';
import { ClassificationOrderByWithRelationInput } from './classification-order-by-with-relation.input';
import { ClassificationWhereUniqueInput } from './classification-where-unique.input';
import { ClassificationCountAggregateInput } from './classification-count-aggregate.input';
import { ClassificationAvgAggregateInput } from './classification-avg-aggregate.input';
import { ClassificationSumAggregateInput } from './classification-sum-aggregate.input';
import { ClassificationMinAggregateInput } from './classification-min-aggregate.input';
import { ClassificationMaxAggregateInput } from './classification-max-aggregate.input';

@ArgsType()
export class ClassificationAggregateArgs {
  @Field(() => ClassificationWhereInput, { nullable: true })
  @Type(() => ClassificationWhereInput)
  where?: ClassificationWhereInput;

  @Field(() => [ClassificationOrderByWithRelationInput], { nullable: true })
  @Type(() => ClassificationOrderByWithRelationInput)
  orderBy?: Array<ClassificationOrderByWithRelationInput>;

  @Field(() => ClassificationWhereUniqueInput, { nullable: true })
  @Type(() => ClassificationWhereUniqueInput)
  cursor?: Prisma.AtLeast<ClassificationWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => ClassificationCountAggregateInput, { nullable: true })
  @Type(() => ClassificationCountAggregateInput)
  _count?: ClassificationCountAggregateInput;

  @Field(() => ClassificationAvgAggregateInput, { nullable: true })
  @Type(() => ClassificationAvgAggregateInput)
  _avg?: ClassificationAvgAggregateInput;

  @Field(() => ClassificationSumAggregateInput, { nullable: true })
  @Type(() => ClassificationSumAggregateInput)
  _sum?: ClassificationSumAggregateInput;

  @Field(() => ClassificationMinAggregateInput, { nullable: true })
  @Type(() => ClassificationMinAggregateInput)
  _min?: ClassificationMinAggregateInput;

  @Field(() => ClassificationMaxAggregateInput, { nullable: true })
  @Type(() => ClassificationMaxAggregateInput)
  _max?: ClassificationMaxAggregateInput;
}
