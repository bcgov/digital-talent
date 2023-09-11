import { gql } from 'graphql-request';
import { graphqlApi } from '..';
import { GetSkillsGqlResponse } from './skill.interfaces';

export const skillsApi = graphqlApi.injectEndpoints({
  endpoints: (build) => ({
    getSkills: build.query<GetSkillsGqlResponse, void>({
      query: () => ({
        document: gql`
          query Skills {
            skills {
              id
              category
              name
              description
              created_at
              updated_at
            }
          }
        `,
      }),
    }),
  }),
});

export const { useGetSkillsQuery, useLazyGetSkillsQuery } = skillsApi;
