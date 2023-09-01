import { gql } from 'graphql-request';
import { graphqlApi } from '.';

interface CompetitionGqlModel {
  id: string;
  deltek_id?: string;
  job_description: {
    name: string;
    classification: {
      occupation_group: {
        code: string;
      };
      grid: {
        name: string;
      };
    };
  };
  recruiter: {
    name: string;
  };
  category: string;
  state: string;
}

interface GetCompetitionsGqlResponse {
  competitions: CompetitionGqlModel[];
}

export const competitionApi = graphqlApi.injectEndpoints({
  endpoints: (build) => ({
    getCompetitions: build.query<GetCompetitionsGqlResponse, void>({
      query: () => ({
        document: gql`
          query Competitions {
            competitions {
              id
              deltek_id
              job_description {
                name
                classification {
                  occupation_group {
                    code
                  }
                  grid {
                    name
                  }
                }
              }
              recruiter {
                name
              }
              category
              state
            }
          }
        `,
      }),
    }),
  }),
});

export const { useGetCompetitionsQuery } = competitionApi;
