import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CompetitionScheduleUpdateInput } from './competition-schedule-update.input';
import { CompetitionScheduleWhereUniqueInput } from './competition-schedule-where-unique.input';

@ArgsType()
export class UpdateOneCompetitionScheduleArgs {
  @Field(() => CompetitionScheduleUpdateInput, { nullable: false })
  @Type(() => CompetitionScheduleUpdateInput)
  data!: CompetitionScheduleUpdateInput;

  @Field(() => CompetitionScheduleWhereUniqueInput, { nullable: false })
  @Type(() => CompetitionScheduleWhereUniqueInput)
  where!: Prisma.AtLeast<CompetitionScheduleWhereUniqueInput, 'id' | 'competition_id'>;
}
