import { ICompetitionSkillModel } from './competition-skill.model';

export class CompetitionSkillWriteModel implements Omit<ICompetitionSkillModel, 'competition' | 'skill'> {
  competition_id: string;

  skill_id: string;

  min_years_experience: number;

  is_required: boolean;

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;
}
