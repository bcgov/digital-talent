import { IMinistryModel } from './ministry.model';

export class MinistryWriteModel implements IMinistryModel {
  id: string;

  deltek_id: string;

  name: string;

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;
}
