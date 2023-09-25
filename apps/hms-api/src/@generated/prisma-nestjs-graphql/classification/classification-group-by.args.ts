import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ClassificationWhereInput } from './classification-where.input';
import { ClassificationOrderByWithAggregationInput } from './classification-order-by-with-aggregation.input';
import { ClassificationScalarFieldEnum } from './classification-scalar-field.enum';
import { ClassificationScalarWhereWithAggregatesInput } from './classification-scalar-where-with-aggregates.input';
import { ClassificationCountAggregateInput } from './classification-count-aggregate.input';
import { ClassificationAvgAggregateInput } from './classification-avg-aggregate.input';
import { ClassificationSumAggregateInput } from './classification-sum-aggregate.input';
import { ClassificationMinAggregateInput } from './classification-min-aggregate.input';
import { ClassificationMaxAggregateInput } from './classification-max-aggregate.input';

@ArgsType()
export class ClassificationGroupByArgs {
  @Field(() => ClassificationWhereInput, { nullable: true })
  @Type(() => ClassificationWhereInput)
  where?: ClassificationWhereInput;

  @Field(() => [ClassificationOrderByWithAggregationInput], { nullable: true })
  @Type(() => ClassificationOrderByWithAggregationInput)
  orderBy?: Array<ClassificationOrderByWithAggregationInput>;

  @Field(() => [ClassificationScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof ClassificationScalarFieldEnum>;

  @Field(() => ClassificationScalarWhereWithAggregatesInput, { nullable: true })
  @Type(() => ClassificationScalarWhereWithAggregatesInput)
  having?: ClassificationScalarWhereWithAggregatesInput;

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
