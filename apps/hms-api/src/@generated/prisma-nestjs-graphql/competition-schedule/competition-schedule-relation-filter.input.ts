import { Field, InputType } from '@nestjs/graphql';
import { CompetitionScheduleWhereInput } from './competition-schedule-where.input';

@InputType()
export class CompetitionScheduleRelationFilter {
  @Field(() => CompetitionScheduleWhereInput, { nullable: true })
  is?: CompetitionScheduleWhereInput;

  @Field(() => CompetitionScheduleWhereInput, { nullable: true })
  isNot?: CompetitionScheduleWhereInput;
}
