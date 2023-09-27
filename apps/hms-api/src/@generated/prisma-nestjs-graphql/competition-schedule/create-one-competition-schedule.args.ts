import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CompetitionScheduleCreateInput } from './competition-schedule-create.input';

@ArgsType()
export class CreateOneCompetitionScheduleArgs {
  @Field(() => CompetitionScheduleCreateInput, { nullable: false })
  @Type(() => CompetitionScheduleCreateInput)
  data!: CompetitionScheduleCreateInput;
}
