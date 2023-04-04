/* eslint-disable no-console */
import qs from 'qs';
import { ApiPagedResponse } from '../interfaces/api.interface';
import { api } from './api';

export type PicklistScope = 'digital-talent-roles' | 'locations' | 'ministries' | 'skills' | 'users';

export type PicklistArgs = {
  scope: PicklistScope;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filter?: Record<string, any>;
};

export const picklistsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPicklist: builder.query<ApiPagedResponse, PicklistArgs>({
      query: (args) => `v0/picklists/${args.scope}${args.filter ? `?${qs.stringify(args.filter)}` : ''}`,
    }),
  }),
});

export const { useGetPicklistQuery, useLazyGetPicklistQuery } = picklistsApi;

export const {
  endpoints: { getPicklist },
} = picklistsApi;
