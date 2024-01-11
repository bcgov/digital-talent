import { gql } from 'graphql-request';
import { graphqlApi } from '.';
import { FormSelectOption } from '../../../components/form/inputs/select/select.component';

interface JobDescriptionGqlModel {
  id: string;
  name: string;
  classification: {
    occupation_group: {
      name: string;
      code: string;
    };
    grid: {
      name: string;
      steps: { rate_per_year: number }[];
    };
    rate_adjstment: number;
  };
  created_at: Date;
  updated_at?: Date;
}

interface GetJobDescriptionsGqlResponse {
  jobDescriptions: JobDescriptionGqlModel[];
}

export const jobDescriptionApi = graphqlApi.injectEndpoints({
  endpoints: (build) => ({
    getJobDescriptions: build.query<GetJobDescriptionsGqlResponse, void>({
      query: () => ({
        document: gql`
          query JobDescriptions {
            jobDescriptions {
              id
              name
              classification {
                occupation_group {
                  name
                  code
                }
                grid {
                  name
                  steps {
                    rate_per_year
                  }
                }
                rate_adjustment
              }
              created_at
              updated_at
            }
          }
        `,
      }),
    }),
    getJobDescriptionsPicklist: build.query<FormSelectOption[], void>({
      query: () => ({
        document: gql`
          query JobDescriptions {
            jobDescriptions {
              id
              name
              classification {
                occupation_group {
                  code
                }
                grid {
                  name
                }
                rate_adjustment
              }
            }
          }
        `,
      }),
      transformResponse: (res: GetJobDescriptionsGqlResponse): FormSelectOption[] => {
        return res.jobDescriptions.map((jd) => ({
          label: jd.name,
          value: jd.id,
          description: `${jd.classification.occupation_group.code} ${jd.classification.grid.name}`,
        })) as FormSelectOption[];
      },
    }),
  }),
});

export const {
  useGetJobDescriptionsQuery,
  useGetJobDescriptionsPicklistQuery,
  useLazyGetJobDescriptionsPicklistQuery,
} = jobDescriptionApi;
