/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiPagedResponse, ApiResponse } from '../interfaces/api.interface';
import { api } from './api';

export const candidatesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createCandidate: builder.mutation<ApiResponse, Record<string, any>>({
      query: (data) => ({ url: `v0/candidates`, method: 'POST', body: data }),
      invalidatesTags: [{ type: 'Candidates', id: 'LIST' }],
    }),
    getCandidates: builder.query<ApiPagedResponse, void>({
      query: () => ({ url: 'v0/candidates' }),
      providesTags: (result) => {
        return [
          ...(result?.data ?? []).map(({ id }) => ({ type: 'Candidates', id: id as string } as const)),
          { type: 'Candidates' as const, id: 'LIST' },
        ];
      },
    }),
    getCandidate: builder.query<ApiResponse, string>({
      query: (id) => `v0/candidates/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Candidates', id }],
    }),
    updateCandidate: builder.mutation<ApiResponse, Record<string, any>>({
      query: (data) => {
        const { id, ...body } = data;
        return {
          url: `v0/candidates/${id}`,
          method: 'PATCH',
          body,
        };
      },
      invalidatesTags: [{ type: 'Candidates', id: 'LIST' }],
    }),
  }),
});

export const {
  useCreateCandidateMutation,
  useGetCandidatesQuery,
  useLazyGetCandidatesQuery,
  useGetCandidateQuery,
  useLazyGetCandidateQuery,
  useUpdateCandidateMutation,
} = candidatesApi;

export const {
  endpoints: { createCandidate, getCandidates, getCandidate, updateCandidate },
} = candidatesApi;
