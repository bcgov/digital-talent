import { Field, Int, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';

@ObjectType()
export class ApplicationSkillEntity {
  @Field((type) => GraphQLUUID)
  application_id: string;

  @Field((type) => GraphQLUUID)
  skill_id: string;

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;

  @Field(() => Int)
  years_experience: number;

  description: string;
}
