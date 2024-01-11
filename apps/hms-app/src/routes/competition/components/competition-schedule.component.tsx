import { Table, Tag } from 'antd';
import dayjs from 'dayjs';
import { useLoaderData } from 'react-router-dom';
import { useGetCompetitionScheduleQuery } from '../../../redux/services/graphql-api/competitions/competition-schedule-api.service';

export const CompetitionSchedule = () => {
  const loaderData = useLoaderData() as Record<string, any>;
  const { data, isLoading } = useGetCompetitionScheduleQuery(loaderData.id);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'State',
      dataIndex: 'state',
      key: 'state',
      render: (value: string) => {
        return <Tag>{value}</Tag>;
      },
    },
    {
      title: 'Start Date',
      dataIndex: 'start_at',
      key: 'start_at',
      render: (value?: string) => {
        return (
          <span title={value != null ? dayjs(value).format('MMM D, YYYY @ h:mm:ss.SSS A') : ''}>
            {value != null ? dayjs(value).format('MMM D, YYYY @ h:mm:ss A') : ''}
          </span>
        );
      },
    },
    {
      title: 'End Date',
      dataIndex: 'end_at',
      key: 'end_at',
      render: (value?: string) => {
        return (
          <span title={value != null ? dayjs(value).format('MMM D, YYYY @ h:mm:ss.SSS A') : ''}>
            {value != null ? dayjs(value).format('MMM D, YYYY @ h:mm:ss A') : ''}
          </span>
        );
      },
    },
    {
      title: 'Created Date',
      dataIndex: 'created_at',
      key: 'created_at',
      render: (value?: string) => {
        return (
          <span title={value != null ? dayjs(value).format('MMM D, YYYY @ h:mm:ss.SSS A') : ''}>
            {value != null ? dayjs(value).format('MMM D, YYYY') : ''}
          </span>
        );
      },
    },
    {
      title: 'Updated Date',
      dataIndex: 'updated_at',
      key: 'updated_at',
      render: (value?: string) => {
        return (
          <span title={value != null ? dayjs(value).format('MMM D, YYYY @ h:mm:ss.SSS A') : ''}>
            {value != null ? dayjs(value).format('MMM D, YYYY') : ''}
          </span>
        );
      },
    },
  ];

  return (
    <>
      <h2>Competition Schedule</h2>
      <div style={{ backgroundColor: '#FFF', padding: '1rem' }}>
        <Table columns={columns} dataSource={data?.competition.schedule} loading={isLoading} rowKey="id" size="small" />
      </div>
    </>
  );
};
