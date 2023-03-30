import { ApiPagedResponse } from '../interfaces/api.interface';
import { api } from './api';

type PicklistContext = 'digital-talent-roles' | 'locations' | 'ministries';

export const picklistsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPicklist: builder.query<ApiPagedResponse, PicklistContext>({
      query: (context) => `v0/picklists/${context}`,
    }),
  }),
});

export const { useGetPicklistQuery, useLazyGetPicklistQuery } = picklistsApi;

export const {
  endpoints: { getPicklist },
} = picklistsApi;
