import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { SkillCategory } from '@prisma/client';
import { GraphQLUUID } from 'graphql-scalars';

registerEnumType(SkillCategory, {
  name: 'SkillCategory',
  description: 'Possible Skill categories',
});

export interface ISkillModel {
  id: string;
  category: SkillCategory;
  name: string;
  description?: string;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

@ObjectType()
export class SkillModel implements ISkillModel {
  @Field((type) => GraphQLUUID)
  id: string;

  @Field((type) => SkillCategory)
  category: SkillCategory;

  name: string;

  description?: string;

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;
}
