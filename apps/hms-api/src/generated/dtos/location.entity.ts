import { CandidateLocation } from './candidate-location.entity';
import { OpportunityLocation } from './opportunity-location.entity';

export class Location {
  id: string;

  name: string;

  created_at: Date;

  updated_at: Date | null;

  candidates?: CandidateLocation[];

  opportunities?: OpportunityLocation[];
}
