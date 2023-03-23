import { OpportunityState } from '@prisma/client';
import { CandidateOpportunity } from './candidate-opportunity.entity';
import { Candidate } from './candidate.entity';
import { DigitalTalentRole } from './digital-talent-role.entity';
import { OpportunityLocation } from './opportunity-location.entity';
import { OpportunitySkill } from './opportunity-skill.entity';
import { Team } from './team.entity';

export class Opportunity {
  id: string;

  role_id: string;

  team_id: string;

  state: OpportunityState;

  created_at: Date;

  updated_at: Date | null;

  candidates?: CandidateOpportunity[];

  locations?: OpportunityLocation[];

  skills?: OpportunitySkill[];

  candidate?: Candidate | null;

  role?: DigitalTalentRole;

  team?: Team;
}
