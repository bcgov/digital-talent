import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CompetitionScheduleWhereInput } from './competition-schedule-where.input';

@ArgsType()
export class DeleteManyCompetitionScheduleArgs {
  @Field(() => CompetitionScheduleWhereInput, { nullable: true })
  @Type(() => CompetitionScheduleWhereInput)
  where?: CompetitionScheduleWhereInput;
}
