import { Candidate } from './candidate.entity';
import { Location } from './location.entity';

export class CandidateLocation {
  candidate_id: string;

  location_id: string;

  rank: number;

  created_at: Date;

  updated_at: Date | null;

  candidate?: Candidate;

  location?: Location;
}
