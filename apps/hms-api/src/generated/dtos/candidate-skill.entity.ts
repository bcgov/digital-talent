import { Candidate } from './candidate.entity';
import { Skill } from './skill.entity';

export class CandidateSkill {
  candidate_id: string;

  skill_id: string;

  created_at: Date;

  updated_at: Date | null;

  candidate?: Candidate;

  skill?: Skill;
}
