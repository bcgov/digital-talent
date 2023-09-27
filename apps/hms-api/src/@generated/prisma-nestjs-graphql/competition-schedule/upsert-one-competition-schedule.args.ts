import { Field, ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { CompetitionScheduleWhereUniqueInput } from './competition-schedule-where-unique.input';
import { CompetitionScheduleCreateInput } from './competition-schedule-create.input';
import { CompetitionScheduleUpdateInput } from './competition-schedule-update.input';

@ArgsType()
export class UpsertOneCompetitionScheduleArgs {
  @Field(() => CompetitionScheduleWhereUniqueInput, { nullable: false })
  @Type(() => CompetitionScheduleWhereUniqueInput)
  where!: Prisma.AtLeast<CompetitionScheduleWhereUniqueInput, 'id' | 'competition_id'>;

  @Field(() => CompetitionScheduleCreateInput, { nullable: false })
  @Type(() => CompetitionScheduleCreateInput)
  create!: CompetitionScheduleCreateInput;

  @Field(() => CompetitionScheduleUpdateInput, { nullable: false })
  @Type(() => CompetitionScheduleUpdateInput)
  update!: CompetitionScheduleUpdateInput;
}
