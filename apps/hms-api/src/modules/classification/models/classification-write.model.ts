import { IClassificationModel } from './classification.model';

export class ClassificationWriteModel implements Omit<IClassificationModel, 'grid' | 'occupation_group'> {
  id: string;

  grid_id: string;

  occupation_group_id: string;

  rate_adjustment: number;

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;
}
