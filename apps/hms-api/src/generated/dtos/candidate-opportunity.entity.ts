import { Candidate } from './candidate.entity';
import { Opportunity } from './opportunity.entity';

export class CandidateOpportunity {
  candidate_id: string;

  opportunity_id: string;

  created_at: Date;

  updated_at: Date | null;

  candidate?: Candidate;

  opportunity?: Opportunity;
}
