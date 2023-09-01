import { gql } from 'graphql-request';
import { graphqlApi } from '.';

interface JobDescriptionGqlModel {
  id: string;
  name: string;
  classification: {
    occupation_group: {
      name: string;
      code: string;
    };
    grid: {
      name: string;
      steps: { rate_per_year: number }[];
    };
    rate_adjstment: number;
  };
}

interface GetJobDescriptionsGqlResponse {
  jobDescriptions: JobDescriptionGqlModel[];
}

export const jobDescriptionApi = graphqlApi.injectEndpoints({
  endpoints: (build) => ({
    getJobDescriptions: build.query<GetJobDescriptionsGqlResponse, void>({
      query: () => ({
        document: gql`
          query JobDescriptions {
            jobDescriptions {
              id
              name
              classification {
                occupation_group {
                  name
                  code
                }
                grid {
                  name
                  steps {
                    rate_per_year
                  }
                }
                rate_adjustment
              }
            }
          }
        `,
      }),
    }),
  }),
});

export const { useGetJobDescriptionsQuery } = jobDescriptionApi;
