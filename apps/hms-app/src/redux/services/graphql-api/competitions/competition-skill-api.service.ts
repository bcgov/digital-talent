import { gql } from 'graphql-request';
import { graphqlApi } from '..';
import { CompetitionSkillGqlModel, GetCompetitionSkillsGqlResponse } from './competition-skill.interfaces';

export const competitionSkillsApi = graphqlApi.injectEndpoints({
  endpoints: (build) => ({
    getCompetitionSkills: build.query<Record<string, any>, string>({
      query: (id: string) => ({
        document: gql`
          query CompetitionSkills {
            competition(id: "${id}") {
              skills {
                skill {
                  category
                  name
                }
                min_years_experience
                is_required
              }
            }
          }
        `,
      }),
      transformResponse: (res: GetCompetitionSkillsGqlResponse): Record<string, any> => {
        const obj: {
          required: CompetitionSkillGqlModel[];
          optional: CompetitionSkillGqlModel[];
        } = {
          required: res.competition.skills.filter((s) => s.is_required === true),
          optional: res.competition.skills.filter((s) => s.is_required !== true),
        };

        return obj;
      },
    }),
  }),
});

export const { useGetCompetitionSkillsQuery, useLazyGetCompetitionSkillsQuery } = competitionSkillsApi;
