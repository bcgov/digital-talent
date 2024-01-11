import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { CompetitionScheduleWhereUniqueInput } from './competition-schedule-where-unique.input';
import { CompetitionScheduleCreateWithoutCompetitionInput } from './competition-schedule-create-without-competition.input';

@InputType()
export class CompetitionScheduleCreateOrConnectWithoutCompetitionInput {
  @Field(() => CompetitionScheduleWhereUniqueInput, { nullable: false })
  @Type(() => CompetitionScheduleWhereUniqueInput)
  where!: Prisma.AtLeast<CompetitionScheduleWhereUniqueInput, 'id' | 'competition_id'>;

  @Field(() => CompetitionScheduleCreateWithoutCompetitionInput, { nullable: false })
  @Type(() => CompetitionScheduleCreateWithoutCompetitionInput)
  create!: CompetitionScheduleCreateWithoutCompetitionInput;
}
