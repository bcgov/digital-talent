import { gql } from 'graphql-request';
import { graphqlApi } from '..';
import { FormSelectOption } from '../../../../components/form/inputs/select/select.component';
import { GetHiringManagersGqlResponse } from './hiring-manager.interfaces';
import { GetRecruitersGqlResponse } from './recruiter.interfaces';

export const usersApi = graphqlApi.injectEndpoints({
  endpoints: (build) => ({
    getHiringManagersPicklist: build.query<FormSelectOption[], void>({
      query: () => ({
        document: gql`
          query HiringManagers {
            hiringManagers {
              id
              name
              email
              created_at
              updated_at
            }
          }
        `,
      }),
      transformResponse(res: GetHiringManagersGqlResponse): FormSelectOption[] {
        return res.hiringManagers.map((user) => ({
          label: user.name,
          value: user.id,
        }));
      },
    }),
    getRecruitersPicklist: build.query<FormSelectOption[], void>({
      query: () => ({
        document: gql`
          query Recruiters {
            recruiters {
              id
              name
              email
              created_at
              updated_at
            }
          }
        `,
      }),
      transformResponse(res: GetRecruitersGqlResponse): FormSelectOption[] {
        return res.recruiters.map((user) => ({
          label: user.name,
          value: user.id,
        }));
      },
    }),
  }),
});

export const {
  useGetHiringManagersPicklistQuery,
  useLazyGetHiringManagersPicklistQuery,
  useGetRecruitersPicklistQuery,
  useLazyGetRecruitersPicklistQuery,
} = usersApi;
