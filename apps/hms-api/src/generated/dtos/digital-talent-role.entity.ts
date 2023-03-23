import { Candidate } from './candidate.entity';
import { Opportunity } from './opportunity.entity';

export class DigitalTalentRole {
  id: string;

  name: string;

  classification: string;

  created_at: Date;

  updated_at: Date | null;

  candidates?: Candidate[];

  Opportunity?: Opportunity[];
}
