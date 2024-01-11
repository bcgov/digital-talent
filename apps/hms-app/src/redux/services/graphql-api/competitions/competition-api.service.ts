import { gql } from 'graphql-request';
import { graphqlApi } from '..';
import { CreateCompetitionDto } from './dtos/create-competition.dto';

interface CompetitionGqlModel {
  id: string;
  deltek_id?: string;
  job_description: {
    name: string;
    classification: {
      occupation_group: {
        code: string;
      };
      grid: {
        name: string;
      };
    };
  };
  recruiter: {
    name: string;
  };
  category: string;
  state: string;
  created_at: Date;
  updated_at?: Date;
}

interface GetCompetitionsGqlResponse {
  competitions: CompetitionGqlModel[];
}

interface GetCompetitionGqlResponse {
  competition: CompetitionGqlModel;
}

interface CreateCompetitionGqlResponse {
  competitions: string;
}

export const competitionApi = graphqlApi.injectEndpoints({
  endpoints: (build) => ({
    createCompetition: build.mutation<CreateCompetitionGqlResponse, CreateCompetitionDto>({
      invalidatesTags: ['Competitions'],
      query: (data: CreateCompetitionDto) => ({
        document: gql`
          mutation CreateCompetition($data: CreateCompetitionInput!) {
            createCompetition(data: $data)
          }
        `,
        variables: { data },
      }),
    }),
    getCompetitions: build.query<GetCompetitionsGqlResponse, void>({
      providesTags: ['Competitions'],
      query: () => ({
        document: gql`
          query Competitions {
            competitions {
              id
              deltek_id
              job_description {
                name
                classification {
                  occupation_group {
                    code
                  }
                  grid {
                    name
                  }
                }
              }
              recruiter {
                name
              }
              category
              state
              created_at
              updated_at
            }
          }
        `,
      }),
    }),
    getCompetition: build.query<GetCompetitionGqlResponse, string>({
      query: (id: string) => ({
        document: gql`
          query Competition {
            competition(id: "${id}") {
              id
              deltek_id
              job_description {
                name
                classification {
                  occupation_group {
                    code
                  }
                  grid {
                    name
                  }
                }
              }
              recruiter {
                name
              }
              category
              state
              created_at
              updated_at
            }
          }
        `,
      }),
    }),
    deleteCompetition: build.mutation<CreateCompetitionGqlResponse, string>({
      invalidatesTags: ['Competitions'],
      query: (id: string) => ({
        document: gql`
          mutation DeleteCompetition($data: DeleteCompetitionInput!) {
            deleteCompetition(data: $data)
          }
        `,
        variables: {
          data: { id },
        },
      }),
    }),
  }),
});

export const {
  useCreateCompetitionMutation,
  useGetCompetitionsQuery,
  useGetCompetitionQuery,
  useDeleteCompetitionMutation,
} = competitionApi;
