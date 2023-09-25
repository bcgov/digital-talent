import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { SkillCategory } from '../../../@generated/prisma-nestjs-graphql';

// registerEnumType(SkillCategory, {
//   name: 'SkillCategory',
//   description: 'Possible Skill categories',
// });

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
