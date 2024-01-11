import { Field, InputType } from '@nestjs/graphql';
// import { Prisma } from '@prisma/client';
import { IsDate, IsEnum, IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';
import { CompetitionState } from '../../../@generated/prisma-nestjs-graphql';
// import { CompetitionState } from '../entities/competitionState.enum';
// import { CompetitionWhereUniqueInput } from './competition-where-unique.input';

// Register the enum with GraphQL
// registerEnumType(CompetitionState, {
//   name: 'CompetitionState', // this one is mandatory
//   description: 'The competition states', // the description is optional
// });

@InputType()
export class CreateCompetitionScheduleInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @Field((type) => GraphQLUUID)
  @IsUUID()
  competition_id: string;

  @Field((type) => CompetitionState)
  @IsEnum(CompetitionState)
  state: CompetitionState;

  @IsDate()
  start_at: Date;

  @IsDate()
  end_at: Date;
}
