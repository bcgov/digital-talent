import { Field, InputType, registerEnumType } from '@nestjs/graphql';
// import { Prisma } from '@prisma/client';
import { IsDate, IsEnum, IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';
// import { CompetitionState } from '../entities/competitionState.enum';
// import { CompetitionWhereUniqueInput } from './competition-where-unique.input';
import { CompetitionState } from '@prisma/client';

// Register the enum with GraphQL
registerEnumType(CompetitionState, {
  name: 'CompetitionState', // this one is mandatory
  description: 'The competition states', // the description is optional
});

@InputType()
export class CreateCompetitionScheduleInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @Field((type) => GraphQLUUID)
  @IsUUID()
  competition_id: string;

  @IsDate()
  start_at: Date;

  @IsDate()
  end_at: Date;

  @Field((type) => CompetitionState)
  // not looking for enum, looking for string. Key value are the same. Test with "isEnum" (elswhere) - capitalized is decorator, camelcase is function that decorator calls
  // other - have type as string, do isArray - spread values of competition state
  @IsEnum(CompetitionState)
  state: CompetitionState;
}
