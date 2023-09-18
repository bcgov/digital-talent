import { Space } from 'antd';
import { useLoaderData } from 'react-router-dom';
import { CompetitionOverview } from './components/competition-overview.component';
import { CompetitionSchedule } from './components/competition-schedule.component';
import { CompetitionSkills } from './components/competition-skills.component';

export const CompetitionDetailPage = () => {
  const loaderData = useLoaderData() as Record<string, any>;

  return (
    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
      <h1 style={{ marginBottom: 0 }}>Competition #{loaderData.id}</h1>
      <CompetitionOverview />
      <CompetitionSchedule />
      <CompetitionSkills />
    </Space>
  );
};
