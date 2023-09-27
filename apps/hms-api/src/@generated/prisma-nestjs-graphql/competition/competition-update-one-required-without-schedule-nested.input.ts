import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CompetitionCreateWithoutScheduleInput } from './competition-create-without-schedule.input';
import { CompetitionCreateOrConnectWithoutScheduleInput } from './competition-create-or-connect-without-schedule.input';
import { CompetitionUpsertWithoutScheduleInput } from './competition-upsert-without-schedule.input';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';
import { CompetitionUpdateToOneWithWhereWithoutScheduleInput } from './competition-update-to-one-with-where-without-schedule.input';

@InputType()
export class CompetitionUpdateOneRequiredWithoutScheduleNestedInput {
  @Field(() => CompetitionCreateWithoutScheduleInput, { nullable: true })
  @Type(() => CompetitionCreateWithoutScheduleInput)
  create?: CompetitionCreateWithoutScheduleInput;

  @Field(() => CompetitionCreateOrConnectWithoutScheduleInput, { nullable: true })
  @Type(() => CompetitionCreateOrConnectWithoutScheduleInput)
  connectOrCreate?: CompetitionCreateOrConnectWithoutScheduleInput;

  @Field(() => CompetitionUpsertWithoutScheduleInput, { nullable: true })
  @Type(() => CompetitionUpsertWithoutScheduleInput)
  upsert?: CompetitionUpsertWithoutScheduleInput;

  @Field(() => CompetitionWhereUniqueInput, { nullable: true })
  @Type(() => CompetitionWhereUniqueInput)
  connect?: Prisma.AtLeast<CompetitionWhereUniqueInput, 'id'>;

  @Field(() => CompetitionUpdateToOneWithWhereWithoutScheduleInput, { nullable: true })
  @Type(() => CompetitionUpdateToOneWithWhereWithoutScheduleInput)
  update?: CompetitionUpdateToOneWithWhereWithoutScheduleInput;
}
