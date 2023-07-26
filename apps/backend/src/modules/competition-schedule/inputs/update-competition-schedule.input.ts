import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsEnum, IsOptional, IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';
import { CompetitionState } from '@prisma/client';

@InputType()
export class UpdateCompetitionScheduleInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @IsDate()
  @IsOptional()
  start_at?: Date;

  @IsDate()
  @IsOptional()
  end_at?: Date;

  @Field((type) => CompetitionState)
  @IsOptional()
  @IsEnum(CompetitionState)
  state?: CompetitionState;
}
