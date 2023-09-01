import { Field, InputType } from '@nestjs/graphql';
import { CompetitionState } from '@prisma/client';
import { IsEnum, IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';

@InputType()
export class UpdateCompetitionStateInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @Field((type) => CompetitionState)
  @IsEnum(CompetitionState)
  state: CompetitionState;
}
