import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CompetitionScheduleUpdateWithoutCompetitionInput } from './competition-schedule-update-without-competition.input';
import { CompetitionScheduleCreateWithoutCompetitionInput } from './competition-schedule-create-without-competition.input';
import { CompetitionScheduleWhereInput } from './competition-schedule-where.input';

@InputType()
export class CompetitionScheduleUpsertWithoutCompetitionInput {
  @Field(() => CompetitionScheduleUpdateWithoutCompetitionInput, { nullable: false })
  @Type(() => CompetitionScheduleUpdateWithoutCompetitionInput)
  update!: CompetitionScheduleUpdateWithoutCompetitionInput;

  @Field(() => CompetitionScheduleCreateWithoutCompetitionInput, { nullable: false })
  @Type(() => CompetitionScheduleCreateWithoutCompetitionInput)
  create!: CompetitionScheduleCreateWithoutCompetitionInput;

  @Field(() => CompetitionScheduleWhereInput, { nullable: true })
  @Type(() => CompetitionScheduleWhereInput)
  where?: CompetitionScheduleWhereInput;
}
