import { Field, ObjectType } from '@nestjs/graphql';
import { OccupationGroupCountAggregate } from './occupation-group-count-aggregate.output';
import { OccupationGroupMinAggregate } from './occupation-group-min-aggregate.output';
import { OccupationGroupMaxAggregate } from './occupation-group-max-aggregate.output';

@ObjectType()
export class AggregateOccupationGroup {
  @Field(() => OccupationGroupCountAggregate, { nullable: true })
  _count?: OccupationGroupCountAggregate;

  @Field(() => OccupationGroupMinAggregate, { nullable: true })
  _min?: OccupationGroupMinAggregate;

  @Field(() => OccupationGroupMaxAggregate, { nullable: true })
  _max?: OccupationGroupMaxAggregate;
}
