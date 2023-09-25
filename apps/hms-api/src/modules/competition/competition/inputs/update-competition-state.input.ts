import { Field, InputType } from '@nestjs/graphql';
import { IsEnum, IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';
import { CompetitionState } from '../../../../@generated/prisma-nestjs-graphql';

@InputType()
export class UpdateCompetitionStateInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @Field((type) => CompetitionState)
  @IsEnum(CompetitionState)
  state: CompetitionState;
}
