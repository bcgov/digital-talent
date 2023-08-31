import { gql } from 'graphql-request';
import { graphqlApi } from '.';

interface ClassificationGqlModel {
  id: string;
  occupation_group: {
    name: string;
    code: string;
  };
  grid: {
    name: string;
  };
  rate_adjstment: number;
}

interface GetClassificationsGqlResponse {
  classifications: ClassificationGqlModel[];
}

export const classificationApi = graphqlApi.injectEndpoints({
  endpoints: (build) => ({
    getClassifications: build.query<GetClassificationsGqlResponse, void>({
      query: () => ({
        document: gql`
          query Classifications {
            classifications {
              id
              occupation_group {
                name
                code
              }
              grid {
                name
              }
              rate_adjustment
            }
          }
        `,
      }),
    }),
  }),
});

export const { useGetClassificationsQuery } = classificationApi;
