import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CompetitionCreateWithoutScheduleInput } from './competition-create-without-schedule.input';
import { CompetitionCreateOrConnectWithoutScheduleInput } from './competition-create-or-connect-without-schedule.input';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';

@InputType()
export class CompetitionCreateNestedOneWithoutScheduleInput {
  @Field(() => CompetitionCreateWithoutScheduleInput, { nullable: true })
  @Type(() => CompetitionCreateWithoutScheduleInput)
  create?: CompetitionCreateWithoutScheduleInput;

  @Field(() => CompetitionCreateOrConnectWithoutScheduleInput, { nullable: true })
  @Type(() => CompetitionCreateOrConnectWithoutScheduleInput)
  connectOrCreate?: CompetitionCreateOrConnectWithoutScheduleInput;

  @Field(() => CompetitionWhereUniqueInput, { nullable: true })
  @Type(() => CompetitionWhereUniqueInput)
  connect?: Prisma.AtLeast<CompetitionWhereUniqueInput, 'id'>;
}
