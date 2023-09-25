import { CompetitionCategory, CompetitionState } from '../../../../@generated/prisma-nestjs-graphql';
import { ICompetitionModel } from './competition.model';

export class CompetitionWriteModel implements Omit<ICompetitionModel, 'job_description' | 'recruiter' | 'skills'> {
  id: string;

  deltek_id?: string;

  job_description_id: string;

  recruiter_id?: string;

  category: CompetitionCategory;

  state: CompetitionState;

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;
}
