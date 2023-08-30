import { gql } from 'graphql-request';
import { graphqlApi } from '.';

interface CompetitionGqlModel {
  id: string;
  deltek_id?: string;
  classification: {
    grid: {
      name: string;
    };
    position: {
      name: string;
      category: 'CMH' | 'RH';
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
              classification {
                grid {
                  name
                }
                position {
                  name
                  category
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
