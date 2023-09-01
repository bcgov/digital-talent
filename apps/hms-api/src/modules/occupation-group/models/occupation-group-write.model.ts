import { IOccupationGroupModel } from './occupation-group.model';

export class OccupationGroupWriteModel implements IOccupationGroupModel {
  id: string;

  code: string;

  name: string;

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;
}
