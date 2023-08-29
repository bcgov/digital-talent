import { IClassificationModel } from './classification.model';

export class ClassificationWriteModel implements Omit<IClassificationModel, 'grid' | 'position'> {
  id: string;

  grid_id: string;

  position_id: string;

  rate_adjustment: number;

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;
}
