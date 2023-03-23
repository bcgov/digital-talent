import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const hmsApi = createApi({
  reducerPath: 'hmsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:3000/' }),
  endpoints: (builder) => ({
    getCandidates: builder.query({ query: () => `candidates/` }),
  }),
});

export const { useGetCandidatesQuery } = hmsApi;
