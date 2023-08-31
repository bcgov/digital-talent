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
            }
          }
        `,
      }),
    }),
  }),
});

export const { useGetLocationsQuery } = locationApi;
