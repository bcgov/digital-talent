import { Field, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';

@InputType()
export class RemoveCompetitionSkillInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  competition_id: string;

  @Field((type) => GraphQLUUID)
  @IsUUID()
  skill_id: string;
}
