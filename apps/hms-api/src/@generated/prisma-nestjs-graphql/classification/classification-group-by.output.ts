import { Field, ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { ClassificationCountAggregate } from './classification-count-aggregate.output';
import { ClassificationAvgAggregate } from './classification-avg-aggregate.output';
import { ClassificationSumAggregate } from './classification-sum-aggregate.output';
import { ClassificationMinAggregate } from './classification-min-aggregate.output';
import { ClassificationMaxAggregate } from './classification-max-aggregate.output';

@ObjectType()
export class ClassificationGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  grid_id!: string;

  @Field(() => String, { nullable: false })
  occupation_group_id!: string;

  @Field(() => GraphQLDecimal, { nullable: false })
  rate_adjustment!: Decimal;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => ClassificationCountAggregate, { nullable: true })
  _count?: ClassificationCountAggregate;

  @Field(() => ClassificationAvgAggregate, { nullable: true })
  _avg?: ClassificationAvgAggregate;

  @Field(() => ClassificationSumAggregate, { nullable: true })
  _sum?: ClassificationSumAggregate;

  @Field(() => ClassificationMinAggregate, { nullable: true })
  _min?: ClassificationMinAggregate;

  @Field(() => ClassificationMaxAggregate, { nullable: true })
  _max?: ClassificationMaxAggregate;
}
