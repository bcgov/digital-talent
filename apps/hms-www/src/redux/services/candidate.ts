/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiPagedResponse, ApiResponse } from '../interfaces/api.interface';
import { api } from './api';

export const candidatesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCandidates: builder.query<ApiPagedResponse, void>({
      query: () => ({ url: 'v0/candidates' }),
    }),
    getCandidate: builder.query<ApiResponse, string>({
      query: (id) => `v0/candidates/${id}`,
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
    }),
  }),
});

export const {
  useGetCandidatesQuery,
  useLazyGetCandidatesQuery,
  useGetCandidateQuery,
  useLazyGetCandidateQuery,
  useUpdateCandidateMutation,
} = candidatesApi;

export const {
  endpoints: { getCandidates, getCandidate, updateCandidate },
} = candidatesApi;
