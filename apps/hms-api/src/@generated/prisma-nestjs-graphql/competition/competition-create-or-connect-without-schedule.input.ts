import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';
import { CompetitionCreateWithoutScheduleInput } from './competition-create-without-schedule.input';

@InputType()
export class CompetitionCreateOrConnectWithoutScheduleInput {
  @Field(() => CompetitionWhereUniqueInput, { nullable: false })
  @Type(() => CompetitionWhereUniqueInput)
  where!: Prisma.AtLeast<CompetitionWhereUniqueInput, 'id'>;

  @Field(() => CompetitionCreateWithoutScheduleInput, { nullable: false })
  @Type(() => CompetitionCreateWithoutScheduleInput)
  create!: CompetitionCreateWithoutScheduleInput;
}
