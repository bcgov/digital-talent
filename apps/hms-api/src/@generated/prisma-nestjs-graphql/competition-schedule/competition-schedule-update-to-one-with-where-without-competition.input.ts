import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CompetitionScheduleWhereInput } from './competition-schedule-where.input';
import { CompetitionScheduleUpdateWithoutCompetitionInput } from './competition-schedule-update-without-competition.input';

@InputType()
export class CompetitionScheduleUpdateToOneWithWhereWithoutCompetitionInput {
  @Field(() => CompetitionScheduleWhereInput, { nullable: true })
  @Type(() => CompetitionScheduleWhereInput)
  where?: CompetitionScheduleWhereInput;

  @Field(() => CompetitionScheduleUpdateWithoutCompetitionInput, { nullable: false })
  @Type(() => CompetitionScheduleUpdateWithoutCompetitionInput)
  data!: CompetitionScheduleUpdateWithoutCompetitionInput;
}
