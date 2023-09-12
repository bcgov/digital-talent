import { CompetitionState } from '@prisma/client';
import { ICompetitionScheduleModel } from './competition-schedule.model';

export class CompetitionScheduleWriteModel implements Omit<ICompetitionScheduleModel, 'competition'> {
  id: string;

  competition_id: string;

  state: CompetitionState;

  start_at: Date;

  end_at: Date;

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;
}
