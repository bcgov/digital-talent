import { SkillCategory } from '../../../@generated/prisma-nestjs-graphql';
import { ISkillModel } from './skill.model';

export class SkillWriteModel implements ISkillModel {
  id: string;

  category: SkillCategory;

  name: string;

  description?: string;

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;
}
