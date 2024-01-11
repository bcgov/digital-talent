import { Field, InputType } from '@nestjs/graphql';
import { CompetitionScheduleWhereInput } from './competition-schedule-where.input';

@InputType()
export class CompetitionScheduleListRelationFilter {
  @Field(() => CompetitionScheduleWhereInput, { nullable: true })
  every?: CompetitionScheduleWhereInput;

  @Field(() => CompetitionScheduleWhereInput, { nullable: true })
  some?: CompetitionScheduleWhereInput;

  @Field(() => CompetitionScheduleWhereInput, { nullable: true })
  none?: CompetitionScheduleWhereInput;
}
