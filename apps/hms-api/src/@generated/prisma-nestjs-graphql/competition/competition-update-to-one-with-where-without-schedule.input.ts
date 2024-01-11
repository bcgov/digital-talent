import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CompetitionWhereInput } from './competition-where.input';
import { CompetitionUpdateWithoutScheduleInput } from './competition-update-without-schedule.input';

@InputType()
export class CompetitionUpdateToOneWithWhereWithoutScheduleInput {
  @Field(() => CompetitionWhereInput, { nullable: true })
  @Type(() => CompetitionWhereInput)
  where?: CompetitionWhereInput;

  @Field(() => CompetitionUpdateWithoutScheduleInput, { nullable: false })
  @Type(() => CompetitionUpdateWithoutScheduleInput)
  data!: CompetitionUpdateWithoutScheduleInput;
}
