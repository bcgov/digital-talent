import { Field, ObjectType } from '@nestjs/graphql';
import { SkillCategory } from '@prisma/client';
import { GraphQLUUID } from 'graphql-scalars';

@ObjectType()
export class SkillEntity {
  @Field((type) => GraphQLUUID)
  id: string;

  category?: SkillCategory;

  name?: string;

  description?: string;

  created_at: Date;

  updated_at?: Date;
}
