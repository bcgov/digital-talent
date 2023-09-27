import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CompetitionUpdateWithoutScheduleInput } from './competition-update-without-schedule.input';
import { CompetitionCreateWithoutScheduleInput } from './competition-create-without-schedule.input';
import { CompetitionWhereInput } from './competition-where.input';

@InputType()
export class CompetitionUpsertWithoutScheduleInput {
  @Field(() => CompetitionUpdateWithoutScheduleInput, { nullable: false })
  @Type(() => CompetitionUpdateWithoutScheduleInput)
  update!: CompetitionUpdateWithoutScheduleInput;

  @Field(() => CompetitionCreateWithoutScheduleInput, { nullable: false })
  @Type(() => CompetitionCreateWithoutScheduleInput)
  create!: CompetitionCreateWithoutScheduleInput;

  @Field(() => CompetitionWhereInput, { nullable: true })
  @Type(() => CompetitionWhereInput)
  where?: CompetitionWhereInput;
}
