import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CompetitionScheduleCreateWithoutCompetitionInput } from './competition-schedule-create-without-competition.input';
import { CompetitionScheduleCreateOrConnectWithoutCompetitionInput } from './competition-schedule-create-or-connect-without-competition.input';
import { CompetitionScheduleCreateManyCompetitionInputEnvelope } from './competition-schedule-create-many-competition-input-envelope.input';
import { CompetitionScheduleWhereUniqueInput } from './competition-schedule-where-unique.input';

@InputType()
export class CompetitionScheduleCreateNestedManyWithoutCompetitionInput {
  @Field(() => [CompetitionScheduleCreateWithoutCompetitionInput], { nullable: true })
  @Type(() => CompetitionScheduleCreateWithoutCompetitionInput)
  create?: Array<CompetitionScheduleCreateWithoutCompetitionInput>;

  @Field(() => [CompetitionScheduleCreateOrConnectWithoutCompetitionInput], { nullable: true })
  @Type(() => CompetitionScheduleCreateOrConnectWithoutCompetitionInput)
  connectOrCreate?: Array<CompetitionScheduleCreateOrConnectWithoutCompetitionInput>;

  @Field(() => CompetitionScheduleCreateManyCompetitionInputEnvelope, { nullable: true })
  @Type(() => CompetitionScheduleCreateManyCompetitionInputEnvelope)
  createMany?: CompetitionScheduleCreateManyCompetitionInputEnvelope;

  @Field(() => [CompetitionScheduleWhereUniqueInput], { nullable: true })
  @Type(() => CompetitionScheduleWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<CompetitionScheduleWhereUniqueInput, 'id' | 'competition_id'>>;
}
