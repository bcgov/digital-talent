import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';

@ObjectType()
export class CompetitionSkillCommandEntity {
  @Field((type) => GraphQLUUID)
  competition_id: string;

  @Field((type) => GraphQLUUID)
  skill_id: string;

  min_years_experience: number;

  is_required: boolean;

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;
}
