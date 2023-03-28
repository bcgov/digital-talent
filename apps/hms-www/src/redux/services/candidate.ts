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
  }),
});

export const { useGetCandidatesQuery, useLazyGetCandidatesQuery, useGetCandidateQuery, useLazyGetCandidateQuery } =
  candidatesApi;

export const {
  endpoints: { getCandidates },
} = candidatesApi;
