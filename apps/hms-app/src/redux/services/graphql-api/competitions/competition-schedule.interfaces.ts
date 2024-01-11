export interface CompetitionScheduleGqlModel {}

export interface GetCompetitionScheduleGqlResponse {
  competition: {
    schedule: CompetitionScheduleGqlModel[];
  };
}
