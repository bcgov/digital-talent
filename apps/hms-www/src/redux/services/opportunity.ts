/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiPagedResponse, ApiResponse } from '../interfaces/api.interface';
import { api } from './api';

export const opportunityApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createOpportunity: builder.mutation<ApiResponse, Record<string, any>>({
      query: (data) => ({ url: `v0/opportunities`, method: 'POST', body: data }),
      invalidatesTags: [{ type: 'Opportunities', id: 'LIST' }],
    }),
    getOpportunities: builder.query<ApiPagedResponse, void>({
      query: () => ({ url: 'v0/opportunities' }),
      providesTags: (result) => {
        return [
          ...(result?.data ?? []).map(({ id }) => ({ type: 'Opportunities', id: id as string } as const)),
          { type: 'Opportunities' as const, id: 'LIST' },
        ];
      },
    }),
    getOpportunity: builder.query<ApiResponse, string>({
      query: (id) => `v0/opportunities/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Opportunities', id }],
    }),
    updateOpportunity: builder.mutation<ApiResponse, Record<string, any>>({
      query: (data) => {
        const { id, ...body } = data;
        return {
          url: `v0/opportunities/${id}`,
          method: 'PATCH',
          body,
        };
      },
      invalidatesTags: (result, error, id) => [
        { type: 'Opportunities', id: id.id },
        { type: 'Opportunities', id: 'LIST' },
      ],
    }),
  }),
});

export const {
  useCreateOpportunityMutation,
  useGetOpportunitiesQuery,
  useLazyGetOpportunitiesQuery,
  useGetOpportunityQuery,
  useLazyGetOpportunityQuery,
  useUpdateOpportunityMutation,
} = opportunityApi;

export const {
  endpoints: { createOpportunity, getOpportunities, getOpportunity, updateOpportunity },
} = opportunityApi;
