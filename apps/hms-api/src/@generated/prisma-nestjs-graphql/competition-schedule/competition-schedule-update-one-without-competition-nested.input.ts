import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CompetitionScheduleCreateWithoutCompetitionInput } from './competition-schedule-create-without-competition.input';
import { CompetitionScheduleCreateOrConnectWithoutCompetitionInput } from './competition-schedule-create-or-connect-without-competition.input';
import { CompetitionScheduleUpsertWithoutCompetitionInput } from './competition-schedule-upsert-without-competition.input';
import { CompetitionScheduleWhereInput } from './competition-schedule-where.input';
import { CompetitionScheduleWhereUniqueInput } from './competition-schedule-where-unique.input';
import { CompetitionScheduleUpdateToOneWithWhereWithoutCompetitionInput } from './competition-schedule-update-to-one-with-where-without-competition.input';

@InputType()
export class CompetitionScheduleUpdateOneWithoutCompetitionNestedInput {
  @Field(() => CompetitionScheduleCreateWithoutCompetitionInput, { nullable: true })
  @Type(() => CompetitionScheduleCreateWithoutCompetitionInput)
  create?: CompetitionScheduleCreateWithoutCompetitionInput;

  @Field(() => CompetitionScheduleCreateOrConnectWithoutCompetitionInput, { nullable: true })
  @Type(() => CompetitionScheduleCreateOrConnectWithoutCompetitionInput)
  connectOrCreate?: CompetitionScheduleCreateOrConnectWithoutCompetitionInput;

  @Field(() => CompetitionScheduleUpsertWithoutCompetitionInput, { nullable: true })
  @Type(() => CompetitionScheduleUpsertWithoutCompetitionInput)
  upsert?: CompetitionScheduleUpsertWithoutCompetitionInput;

  @Field(() => CompetitionScheduleWhereInput, { nullable: true })
  @Type(() => CompetitionScheduleWhereInput)
  disconnect?: CompetitionScheduleWhereInput;

  @Field(() => CompetitionScheduleWhereInput, { nullable: true })
  @Type(() => CompetitionScheduleWhereInput)
  delete?: CompetitionScheduleWhereInput;

  @Field(() => CompetitionScheduleWhereUniqueInput, { nullable: true })
  @Type(() => CompetitionScheduleWhereUniqueInput)
  connect?: Prisma.AtLeast<CompetitionScheduleWhereUniqueInput, 'id' | 'competition_id'>;

  @Field(() => CompetitionScheduleUpdateToOneWithWhereWithoutCompetitionInput, { nullable: true })
  @Type(() => CompetitionScheduleUpdateToOneWithWhereWithoutCompetitionInput)
  update?: CompetitionScheduleUpdateToOneWithWhereWithoutCompetitionInput;
}
