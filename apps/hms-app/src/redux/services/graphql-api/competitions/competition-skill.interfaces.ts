export interface CompetitionSkillGqlModel {
  skill: {
    id: string;
    category: string;
    name: string;
  };
  min_years_experience: number;
  is_required: boolean;
}

export interface GetCompetitionSkillsGqlResponse {
  competition: {
    skills: CompetitionSkillGqlModel[];
  };
}
