import { Field, ObjectType, Int } from '@nestjs/graphql';
import { ElistCountAggregate } from './elist-count-aggregate.output';
import { ElistAvgAggregate } from './elist-avg-aggregate.output';
import { ElistSumAggregate } from './elist-sum-aggregate.output';
import { ElistMinAggregate } from './elist-min-aggregate.output';
import { ElistMaxAggregate } from './elist-max-aggregate.output';

@ObjectType()
export class ElistGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  applicant_id!: string;

  @Field(() => String, { nullable: false })
  competition_id!: string;

  @Field(() => Int, { nullable: false })
  rank!: number;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => ElistCountAggregate, { nullable: true })
  _count?: ElistCountAggregate;

  @Field(() => ElistAvgAggregate, { nullable: true })
  _avg?: ElistAvgAggregate;

  @Field(() => ElistSumAggregate, { nullable: true })
  _sum?: ElistSumAggregate;

  @Field(() => ElistMinAggregate, { nullable: true })
  _min?: ElistMinAggregate;

  @Field(() => ElistMaxAggregate, { nullable: true })
  _max?: ElistMaxAggregate;
}
