import { CompetitionCategory, CompetitionState } from '@prisma/client';
import { ICompetitionModel } from './competition.model';

export class CompetitionWriteModel implements Omit<ICompetitionModel, 'classification' | 'recruiter'> {
  id: string;

  classification_id: string;

  deltek_id?: string;

  recruiter_id?: string;

  category: CompetitionCategory;

  state: CompetitionState;

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;
}
