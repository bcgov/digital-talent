import { Field, HideField, ObjectType } from '@nestjs/graphql';
import { SkillModel } from '../../../skill/models/skill.model';
import { CompetitionModel } from '../../competition/models/competition.model';

export interface ICompetitionSkillModel {
  competition_id: string;
  skill_id: string;
  min_years_experience: number;
  is_required: boolean;
  competition: CompetitionModel;
  skill: SkillModel;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

@ObjectType()
export class CompetitionSkillModel implements ICompetitionSkillModel {
  @HideField()
  competition_id: string;

  @HideField()
  skill_id: string;

  min_years_experience: number;

  is_required: boolean;

  @Field((type) => CompetitionModel)
  competition: CompetitionModel;

  @Field((type) => SkillModel)
  skill: SkillModel;

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;
}
