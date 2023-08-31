import { gql } from 'graphql-request';
import { graphqlApi } from '.';

interface MinistryGqlModel {
  id: string;
  deltek_id: string;
  name: string;
}

interface GetMinistryGqlResponse {
  ministries: MinistryGqlModel[];
}

export const ministryApi = graphqlApi.injectEndpoints({
  endpoints: (build) => ({
    getMinistries: build.query<GetMinistryGqlResponse, void>({
      query: () => ({
        document: gql`
          query Ministries {
            ministries {
              id
              deltek_id
              name
            }
          }
        `,
      }),
    }),
  }),
});

export const { useGetMinistriesQuery } = ministryApi;
