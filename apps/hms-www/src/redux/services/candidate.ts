import { api } from './api';

export const candidatesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCandidates: builder.query<Record<string, unknown>, void>({
      query: () => ({ url: 'v0/candidates' }),
    }),
  }),
});

export const { useGetCandidatesQuery, useLazyGetCandidatesQuery } = candidatesApi;

export const {
  endpoints: { getCandidates },
} = candidatesApi;
