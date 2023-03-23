import { Location } from './location.entity';
import { Opportunity } from './opportunity.entity';

export class OpportunityLocation {
  location_id: string;

  opportunity_id: string;

  created_at: Date;

  updated_at: Date | null;

  location?: Location;

  opportunity?: Opportunity;
}
