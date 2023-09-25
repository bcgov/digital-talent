import { Field, ObjectType } from '@nestjs/graphql';
import { CompetitionScheduleCountAggregate } from './competition-schedule-count-aggregate.output';
import { CompetitionScheduleMinAggregate } from './competition-schedule-min-aggregate.output';
import { CompetitionScheduleMaxAggregate } from './competition-schedule-max-aggregate.output';

@ObjectType()
export class AggregateCompetitionSchedule {
  @Field(() => CompetitionScheduleCountAggregate, { nullable: true })
  _count?: CompetitionScheduleCountAggregate;

  @Field(() => CompetitionScheduleMinAggregate, { nullable: true })
  _min?: CompetitionScheduleMinAggregate;

  @Field(() => CompetitionScheduleMaxAggregate, { nullable: true })
  _max?: CompetitionScheduleMaxAggregate;
}
