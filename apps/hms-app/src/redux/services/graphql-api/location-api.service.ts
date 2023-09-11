import { gql } from 'graphql-request';
import { graphqlApi } from '.';

interface LocationGqlModel {
  id: string;
  region: string;
  deltek_id: string;
  name: string;
  postal_code: string;
  lat: number;
  lon: number;
  created_at: Date;
  updated_at?: Date;
}

interface GetLocationGqlResponse {
  locations: LocationGqlModel[];
}

export const locationApi = graphqlApi.injectEndpoints({
  endpoints: (build) => ({
    getLocations: build.query<GetLocationGqlResponse, void>({
      query: () => ({
        document: gql`
          query Locations {
            locations {
              id
              region
              deltek_id
              name
              postal_code
              lat
              lon
              created_at
              updated_at
            }
          }
        `,
      }),
    }),
  }),
});

export const { useGetLocationsQuery } = locationApi;
