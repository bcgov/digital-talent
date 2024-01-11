import { Field, ObjectType } from '@nestjs/graphql';
import { CompetitionState } from '../prisma/competition-state.enum';
import { CompetitionScheduleCountAggregate } from './competition-schedule-count-aggregate.output';
import { CompetitionScheduleMinAggregate } from './competition-schedule-min-aggregate.output';
import { CompetitionScheduleMaxAggregate } from './competition-schedule-max-aggregate.output';

@ObjectType()
export class CompetitionScheduleGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  competition_id!: string;

  @Field(() => CompetitionState, { nullable: false })
  state!: keyof typeof CompetitionState;

  @Field(() => Date, { nullable: false })
  start_at!: Date | string;

  @Field(() => Date, { nullable: false })
  end_at!: Date | string;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => CompetitionScheduleCountAggregate, { nullable: true })
  _count?: CompetitionScheduleCountAggregate;

  @Field(() => CompetitionScheduleMinAggregate, { nullable: true })
  _min?: CompetitionScheduleMinAggregate;

  @Field(() => CompetitionScheduleMaxAggregate, { nullable: true })
  _max?: CompetitionScheduleMaxAggregate;
}
