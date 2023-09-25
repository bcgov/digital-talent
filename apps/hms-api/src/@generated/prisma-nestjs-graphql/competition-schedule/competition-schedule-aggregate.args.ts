import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CompetitionScheduleWhereInput } from './competition-schedule-where.input';
import { CompetitionScheduleOrderByWithRelationInput } from './competition-schedule-order-by-with-relation.input';
import { CompetitionScheduleWhereUniqueInput } from './competition-schedule-where-unique.input';
import { CompetitionScheduleCountAggregateInput } from './competition-schedule-count-aggregate.input';
import { CompetitionScheduleMinAggregateInput } from './competition-schedule-min-aggregate.input';
import { CompetitionScheduleMaxAggregateInput } from './competition-schedule-max-aggregate.input';

@ArgsType()
export class CompetitionScheduleAggregateArgs {
  @Field(() => CompetitionScheduleWhereInput, { nullable: true })
  @Type(() => CompetitionScheduleWhereInput)
  where?: CompetitionScheduleWhereInput;

  @Field(() => [CompetitionScheduleOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<CompetitionScheduleOrderByWithRelationInput>;

  @Field(() => CompetitionScheduleWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<CompetitionScheduleWhereUniqueInput, 'id' | 'competition_id'>;

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
