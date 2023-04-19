/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiPagedResponse, ApiResponse } from '../interfaces/api.interface';
import { api } from './api';

export const hiringManagersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createHiringManager: builder.mutation<ApiResponse, Record<string, any>>({
      query: (data) => ({ url: `v0/hiring-managers`, method: 'POST', body: data }),
      invalidatesTags: [{ type: 'Hiring Managers', id: 'LIST' }],
    }),
    getHiringManagers: builder.query<ApiPagedResponse, void>({
      query: () => ({ url: 'v0/hiring-managers' }),
      providesTags: (result) => {
        return [
          ...(result?.data ?? []).map(({ id }) => ({ type: 'Hiring Managers', id: id as string } as const)),
          { type: 'Hiring Managers' as const, id: 'LIST' },
        ];
      },
    }),
    getHiringManager: builder.query<ApiResponse, string>({
      query: (id) => `v0/hiring-managers/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Hiring Managers', id }],
    }),
    updateHiringManager: builder.mutation<ApiResponse, Record<string, any>>({
      query: (data) => {
        const { id, ...body } = data;
        return {
          url: `v0/hiring-managers/${id}`,
          method: 'PATCH',
          body,
        };
      },
      invalidatesTags: [{ type: 'Hiring Managers', id: 'LIST' }],
    }),
  }),
});

export const {
  useCreateHiringManagerMutation,
  useGetHiringManagersQuery,
  useLazyGetHiringManagersQuery,
  useGetHiringManagerQuery,
  useLazyGetHiringManagerQuery,
  useUpdateHiringManagerMutation,
} = hiringManagersApi;

export const {
  endpoints: { createHiringManager, getHiringManagers, getHiringManager, updateHiringManager },
} = hiringManagersApi;
