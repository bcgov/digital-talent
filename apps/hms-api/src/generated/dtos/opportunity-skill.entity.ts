import { Opportunity } from './opportunity.entity';
import { Skill } from './skill.entity';

export class OpportunitySkill {
  opportunity_id: string;

  skill_id: string;

  is_mandatory: boolean;

  created_at: Date;

  updated_at: Date | null;

  opportunity?: Opportunity;

  skill?: Skill;
}
