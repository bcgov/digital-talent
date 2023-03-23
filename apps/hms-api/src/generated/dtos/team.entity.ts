import { Opportunity } from './opportunity.entity';

export class Team {
  id: string;

  name: string | null;

  description: string | null;

  links: string[];

  created_at: Date;

  updated_at: Date | null;

  opportunities?: Opportunity[];
}
