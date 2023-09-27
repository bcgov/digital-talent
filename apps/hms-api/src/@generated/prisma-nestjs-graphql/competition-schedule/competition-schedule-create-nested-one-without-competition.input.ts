import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CompetitionScheduleCreateWithoutCompetitionInput } from './competition-schedule-create-without-competition.input';
import { CompetitionScheduleCreateOrConnectWithoutCompetitionInput } from './competition-schedule-create-or-connect-without-competition.input';
import { CompetitionScheduleWhereUniqueInput } from './competition-schedule-where-unique.input';

@InputType()
export class CompetitionScheduleCreateNestedOneWithoutCompetitionInput {
  @Field(() => CompetitionScheduleCreateWithoutCompetitionInput, { nullable: true })
  @Type(() => CompetitionScheduleCreateWithoutCompetitionInput)
  create?: CompetitionScheduleCreateWithoutCompetitionInput;

  @Field(() => CompetitionScheduleCreateOrConnectWithoutCompetitionInput, { nullable: true })
  @Type(() => CompetitionScheduleCreateOrConnectWithoutCompetitionInput)
  connectOrCreate?: CompetitionScheduleCreateOrConnectWithoutCompetitionInput;

  @Field(() => CompetitionScheduleWhereUniqueInput, { nullable: true })
  @Type(() => CompetitionScheduleWhereUniqueInput)
  connect?: Prisma.AtLeast<CompetitionScheduleWhereUniqueInput, 'id' | 'competition_id'>;
}
