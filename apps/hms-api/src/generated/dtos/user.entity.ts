import { Candidate } from './candidate.entity';
import { HiringManager } from './hiring-manager.entity';

export class User {
  id: string;

  idir_id: string;

  name: string;

  roles: string[];

  created_at: Date;

  updated_at: Date | null;

  candidates?: Candidate[];

  hiring_managers?: HiringManager[];
}
