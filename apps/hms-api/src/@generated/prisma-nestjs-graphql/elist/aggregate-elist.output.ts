import { Field, ObjectType } from '@nestjs/graphql';
import { ElistCountAggregate } from './elist-count-aggregate.output';
import { ElistAvgAggregate } from './elist-avg-aggregate.output';
import { ElistSumAggregate } from './elist-sum-aggregate.output';
import { ElistMinAggregate } from './elist-min-aggregate.output';
import { ElistMaxAggregate } from './elist-max-aggregate.output';

@ObjectType()
export class AggregateElist {
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
