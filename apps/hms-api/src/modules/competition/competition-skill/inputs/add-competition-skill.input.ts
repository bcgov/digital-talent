import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsInt, IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';

@InputType()
export class AddCompetitionSkillInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  competition_id: string;

  @Field((type) => GraphQLUUID)
  @IsUUID()
  skill_id: string;

  @IsInt()
  min_years_experience: number;

  @IsBoolean()
  is_required: boolean;
}
