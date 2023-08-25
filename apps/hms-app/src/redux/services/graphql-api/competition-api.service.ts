import { gql } from 'graphql-request';
import { graphqlApi } from '.';

interface Competition {
  id: string;
}

interface GetCompetitionsResponse {
  competitions: Competition[];
}

export const competitionApi = graphqlApi.injectEndpoints({
  endpoints: (build) => ({
    getCompetitions: build.query<GetCompetitionsResponse, void>({
      query: () => ({
        document: gql`
          query Competitions {
            competitions {
              id
              classification_id
              recruiter_id
              category
              state
              deltek_id
            }
          }
        `,
      }),
    }),
  }),
});

export const { useGetCompetitionsQuery } = competitionApi;
