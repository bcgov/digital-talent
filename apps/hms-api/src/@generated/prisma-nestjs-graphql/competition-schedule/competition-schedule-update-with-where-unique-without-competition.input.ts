import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { CompetitionScheduleWhereUniqueInput } from './competition-schedule-where-unique.input';
import { CompetitionScheduleUpdateWithoutCompetitionInput } from './competition-schedule-update-without-competition.input';

@InputType()
export class CompetitionScheduleUpdateWithWhereUniqueWithoutCompetitionInput {
  @Field(() => CompetitionScheduleWhereUniqueInput, { nullable: false })
  @Type(() => CompetitionScheduleWhereUniqueInput)
  where!: Prisma.AtLeast<CompetitionScheduleWhereUniqueInput, 'id' | 'competition_id'>;

  @Field(() => CompetitionScheduleUpdateWithoutCompetitionInput, { nullable: false })
  @Type(() => CompetitionScheduleUpdateWithoutCompetitionInput)
  data!: CompetitionScheduleUpdateWithoutCompetitionInput;
}
