import { Ministry } from './ministry.entity';
import { User } from './user.entity';

export class HiringManager {
  id: string;

  assigned_to_id: string | null;

  ministry_id: string | null;

  name: string | null;

  created_at: Date;

  updated_at: Date | null;

  ministry?: Ministry | null;

  assigned_to?: User | null;
}
