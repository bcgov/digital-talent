import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CompetitionScheduleCreateWithoutCompetitionInput } from './competition-schedule-create-without-competition.input';
import { CompetitionScheduleCreateOrConnectWithoutCompetitionInput } from './competition-schedule-create-or-connect-without-competition.input';
import { CompetitionScheduleUpsertWithWhereUniqueWithoutCompetitionInput } from './competition-schedule-upsert-with-where-unique-without-competition.input';
import { CompetitionScheduleCreateManyCompetitionInputEnvelope } from './competition-schedule-create-many-competition-input-envelope.input';
import { CompetitionScheduleWhereUniqueInput } from './competition-schedule-where-unique.input';
import { CompetitionScheduleUpdateWithWhereUniqueWithoutCompetitionInput } from './competition-schedule-update-with-where-unique-without-competition.input';
import { CompetitionScheduleUpdateManyWithWhereWithoutCompetitionInput } from './competition-schedule-update-many-with-where-without-competition.input';
import { CompetitionScheduleScalarWhereInput } from './competition-schedule-scalar-where.input';

@InputType()
export class CompetitionScheduleUncheckedUpdateManyWithoutCompetitionNestedInput {
  @Field(() => [CompetitionScheduleCreateWithoutCompetitionInput], { nullable: true })
  @Type(() => CompetitionScheduleCreateWithoutCompetitionInput)
  create?: Array<CompetitionScheduleCreateWithoutCompetitionInput>;

  @Field(() => [CompetitionScheduleCreateOrConnectWithoutCompetitionInput], { nullable: true })
  @Type(() => CompetitionScheduleCreateOrConnectWithoutCompetitionInput)
  connectOrCreate?: Array<CompetitionScheduleCreateOrConnectWithoutCompetitionInput>;

  @Field(() => [CompetitionScheduleUpsertWithWhereUniqueWithoutCompetitionInput], { nullable: true })
  @Type(() => CompetitionScheduleUpsertWithWhereUniqueWithoutCompetitionInput)
  upsert?: Array<CompetitionScheduleUpsertWithWhereUniqueWithoutCompetitionInput>;

  @Field(() => CompetitionScheduleCreateManyCompetitionInputEnvelope, { nullable: true })
  @Type(() => CompetitionScheduleCreateManyCompetitionInputEnvelope)
  createMany?: CompetitionScheduleCreateManyCompetitionInputEnvelope;

  @Field(() => [CompetitionScheduleWhereUniqueInput], { nullable: true })
  @Type(() => CompetitionScheduleWhereUniqueInput)
  set?: Array<Prisma.AtLeast<CompetitionScheduleWhereUniqueInput, 'id' | 'competition_id'>>;

  @Field(() => [CompetitionScheduleWhereUniqueInput], { nullable: true })
  @Type(() => CompetitionScheduleWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<CompetitionScheduleWhereUniqueInput, 'id' | 'competition_id'>>;

  @Field(() => [CompetitionScheduleWhereUniqueInput], { nullable: true })
  @Type(() => CompetitionScheduleWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<CompetitionScheduleWhereUniqueInput, 'id' | 'competition_id'>>;

  @Field(() => [CompetitionScheduleWhereUniqueInput], { nullable: true })
  @Type(() => CompetitionScheduleWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<CompetitionScheduleWhereUniqueInput, 'id' | 'competition_id'>>;

  @Field(() => [CompetitionScheduleUpdateWithWhereUniqueWithoutCompetitionInput], { nullable: true })
  @Type(() => CompetitionScheduleUpdateWithWhereUniqueWithoutCompetitionInput)
  update?: Array<CompetitionScheduleUpdateWithWhereUniqueWithoutCompetitionInput>;

  @Field(() => [CompetitionScheduleUpdateManyWithWhereWithoutCompetitionInput], { nullable: true })
  @Type(() => CompetitionScheduleUpdateManyWithWhereWithoutCompetitionInput)
  updateMany?: Array<CompetitionScheduleUpdateManyWithWhereWithoutCompetitionInput>;

  @Field(() => [CompetitionScheduleScalarWhereInput], { nullable: true })
  @Type(() => CompetitionScheduleScalarWhereInput)
  deleteMany?: Array<CompetitionScheduleScalarWhereInput>;
}
