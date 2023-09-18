import { Descriptions } from 'antd';
import { useLoaderData } from 'react-router-dom';
import { useGetCompetitionSkillsQuery } from '../../../redux/services/graphql-api/competitions/competition-skill-api.service';
import { CompetitionSkillGqlModel } from '../../../redux/services/graphql-api/competitions/competition-skill.interfaces';

export const CompetitionSkills = () => {
  const loaderData = useLoaderData() as Record<string, any>;
  const { data } = useGetCompetitionSkillsQuery(loaderData.id);

  const descriptionItems = data
    ? [
        {
          key: 'required',
          label: 'Required',
          children: (
            <p>
              {data.required.map((d: CompetitionSkillGqlModel) => {
                return (
                  <>
                    <span key={d.skill.name}>{d.skill.name}</span>{' '}
                    <span style={{ color: '#A1A1A1' }}>({d.min_years_experience}+ years)</span>
                    <br />
                  </>
                );
              })}
            </p>
          ),
        },
        {
          key: 'optional',
          label: 'Optional',

          children: (
            <p>
              {data.optional.map((d: CompetitionSkillGqlModel) => {
                return (
                  <>
                    <span key={d.skill.name}>{d.skill.name}</span>{' '}
                    {d.min_years_experience === 0 ? (
                      ''
                    ) : (
                      <span style={{ color: '#A1A1A1' }}>({d.min_years_experience}+ years)</span>
                    )}
                    <br />
                  </>
                );
              })}
            </p>
          ),
        },
      ]
    : [];

  return (
    // <>
    //   <h2>Skills</h2>
    //   <span>asdf {JSON.stringify(data, undefined, 2)}</span>
    // </>
    <Descriptions bordered column={1} items={descriptionItems} layout="horizontal" title="Skills" />
  );
};
