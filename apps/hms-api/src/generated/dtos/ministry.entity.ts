import { HiringManager } from './hiring-manager.entity';

export class Ministry {
  id: string;

  code: string;

  name: string;

  created_at: Date;

  updated_at: Date | null;

  hiring_managers?: HiringManager[];
}
