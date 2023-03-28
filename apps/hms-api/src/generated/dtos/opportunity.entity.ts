import { OpportunityState } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { CandidateOpportunity } from './candidate-opportunity.entity';
import { OpportunityLocation } from './opportunity-location.entity';
import { OpportunitySkill } from './opportunity-skill.entity';
import { DigitalTalentRole } from './digital-talent-role.entity';
import { Team } from './team.entity';

export class Opportunity {
  id: string;

  role_id: string;

  team_id: string;

  @ApiProperty({ enum: OpportunityState }) state: OpportunityState;

  created_at: Date;

  updated_at: Date | null;

  candidates?: CandidateOpportunity[];

  locations?: OpportunityLocation[];

  skills?: OpportunitySkill[];

  role?: DigitalTalentRole;

  team?: Team;
}
