import { gql } from 'graphql-request';
import { graphqlApi } from '..';
import { GetCompetitionScheduleGqlResponse } from './competition-schedule.interfaces';

export const competitionScheduleApi = graphqlApi.injectEndpoints({
  endpoints: (build) => ({
    getCompetitionSchedule: build.query<GetCompetitionScheduleGqlResponse, string>({
      query: (id: string) => ({
        document: gql`
          query CompetitionSchedule {
            competition(id: "${id}") {
              schedule {
                id
                state
                start_at
                end_at
                created_at
                updated_at
              }
            }
          }
        `,
      }),
    }),
  }),
});

export const { useGetCompetitionScheduleQuery, useLazyGetCompetitionScheduleQuery } = competitionScheduleApi;
