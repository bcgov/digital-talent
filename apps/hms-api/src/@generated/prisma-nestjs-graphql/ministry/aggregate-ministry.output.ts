import { Field, ObjectType } from '@nestjs/graphql';
import { MinistryCountAggregate } from './ministry-count-aggregate.output';
import { MinistryMinAggregate } from './ministry-min-aggregate.output';
import { MinistryMaxAggregate } from './ministry-max-aggregate.output';

@ObjectType()
export class AggregateMinistry {
  @Field(() => MinistryCountAggregate, { nullable: true })
  _count?: MinistryCountAggregate;

  @Field(() => MinistryMinAggregate, { nullable: true })
  _min?: MinistryMinAggregate;

  @Field(() => MinistryMaxAggregate, { nullable: true })
  _max?: MinistryMaxAggregate;
}
