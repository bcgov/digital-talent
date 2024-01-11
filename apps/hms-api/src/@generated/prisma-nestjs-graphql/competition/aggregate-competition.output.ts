import { Field, ObjectType } from '@nestjs/graphql';
import { CompetitionCountAggregate } from './competition-count-aggregate.output';
import { CompetitionMinAggregate } from './competition-min-aggregate.output';
import { CompetitionMaxAggregate } from './competition-max-aggregate.output';

@ObjectType()
export class AggregateCompetition {
  @Field(() => CompetitionCountAggregate, { nullable: true })
  _count?: CompetitionCountAggregate;

  @Field(() => CompetitionMinAggregate, { nullable: true })
  _min?: CompetitionMinAggregate;

  @Field(() => CompetitionMaxAggregate, { nullable: true })
  _max?: CompetitionMaxAggregate;
}
