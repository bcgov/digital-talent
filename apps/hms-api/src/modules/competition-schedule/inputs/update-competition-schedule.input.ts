import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsEnum, IsOptional, IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';
import { CompetitionState } from '../../../@generated/prisma-nestjs-graphql';

@InputType()
export class UpdateCompetitionScheduleInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @Field((type) => GraphQLUUID)
  @IsUUID()
  @IsOptional()
  competition_id?: string;

  @Field((type) => CompetitionState)
  @IsOptional()
  @IsEnum(CompetitionState)
  state?: CompetitionState;

  @IsDate()
  @IsOptional()
  start_at?: Date;

  @IsDate()
  @IsOptional()
  end_at?: Date;
}
