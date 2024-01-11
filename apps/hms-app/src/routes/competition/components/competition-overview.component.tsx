import { Space, Tag } from 'antd';
import dayjs from 'dayjs';
import { useLoaderData } from 'react-router-dom';
import { useGetCompetitionQuery } from '../../../redux/services/graphql-api/competitions/competition-api.service';

export const CompetitionOverview = () => {
  const loaderData = useLoaderData() as Record<string, any>;
  const { data } = useGetCompetitionQuery(loaderData.id);

  return (
    <div style={{ backgroundColor: '#FFF', padding: '1rem' }}>
      <Space direction="vertical" size="small">
        <Space direction="horizontal" size="middle">
          <Space direction="horizontal" size="small">
            <span style={{ color: '#A1A1A1' }}>Status:</span>
            <span>
              <Tag color="processing">Pre-posting</Tag>
            </span>
          </Space>
          <Space direction="horizontal" size="small">
            <span style={{ color: '#A1A1A1' }}>Updated At:</span>
            <span>{data ? dayjs(data.competition.created_at).format('MMM D, YYYY @ h:mm:ss.SSS A') : ''}</span>
          </Space>
        </Space>
        <Space direction="horizontal" size="middle">
          <Space direction="horizontal" size="small">
            <span style={{ color: '#A1A1A1' }}>REQ:</span>
            <span>{data?.competition.deltek_id}</span>
          </Space>
          <Space direction="horizontal" size="small">
            <span style={{ color: '#A1A1A1' }}>Position:</span>
            <span>{data?.competition.job_description.name}</span>
          </Space>
          <Space direction="horizontal" size="small">
            <span style={{ color: '#A1A1A1' }}>Classification:</span>
            <span>{`${data?.competition.job_description.classification.occupation_group.code} ${data?.competition.job_description.classification.grid.name}`}</span>
          </Space>
        </Space>
      </Space>
    </div>
  );
};
