import { IUserModel } from './user.model';

export class UserWriteModel implements IUserModel {
  id: string;

  deltek_id?: string;

  name?: string;

  email?: string;

  roles: string[];

  created_at?: Date;

  updated_at?: Date;
}
