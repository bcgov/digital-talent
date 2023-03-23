import { CandidateSkill } from './candidate-skill.entity';
import { OpportunitySkill } from './opportunity-skill.entity';

export class Skill {
  id: string;

  name: string;

  min_years_experience: number;

  created_at: Date;

  updated_at: Date | null;

  candidates?: CandidateSkill[];

  opportunities?: OpportunitySkill[];
}
