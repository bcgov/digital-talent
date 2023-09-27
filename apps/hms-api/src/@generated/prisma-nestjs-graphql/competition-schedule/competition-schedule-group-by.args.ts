import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CompetitionScheduleWhereInput } from './competition-schedule-where.input';
import { CompetitionScheduleOrderByWithAggregationInput } from './competition-schedule-order-by-with-aggregation.input';
import { CompetitionScheduleScalarFieldEnum } from './competition-schedule-scalar-field.enum';
import { CompetitionScheduleScalarWhereWithAggregatesInput } from './competition-schedule-scalar-where-with-aggregates.input';
import { CompetitionScheduleCountAggregateInput } from './competition-schedule-count-aggregate.input';
import { CompetitionScheduleMinAggregateInput } from './competition-schedule-min-aggregate.input';
import { CompetitionScheduleMaxAggregateInput } from './competition-schedule-max-aggregate.input';

@ArgsType()
export class CompetitionScheduleGroupByArgs {
  @Field(() => CompetitionScheduleWhereInput, { nullable: true })
  @Type(() => CompetitionScheduleWhereInput)
  where?: CompetitionScheduleWhereInput;

  @Field(() => [CompetitionScheduleOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<CompetitionScheduleOrderByWithAggregationInput>;

  @Field(() => [CompetitionScheduleScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof CompetitionScheduleScalarFieldEnum>;

  @Field(() => CompetitionScheduleScalarWhereWithAggregatesInput, { nullable: true })
  having?: CompetitionScheduleScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => CompetitionScheduleCountAggregateInput, { nullable: true })
  _count?: CompetitionScheduleCountAggregateInput;

  @Field(() => CompetitionScheduleMinAggregateInput, { nullable: true })
  _min?: CompetitionScheduleMinAggregateInput;

  @Field(() => CompetitionScheduleMaxAggregateInput, { nullable: true })
  _max?: CompetitionScheduleMaxAggregateInput;
}
