import { PlusOutlined } from '@ant-design/icons';
import { Button, Space, Table } from 'antd';
import { Link } from 'react-router-dom';
import {
  useDeleteCompetitionMutation,
  useGetCompetitionsQuery,
} from '../../redux/services/graphql-api/competitions/competition-api.service';

export const CompetitionListPage = () => {
  const { data, isLoading } = useGetCompetitionsQuery();
  const [deleteCompetition] = useDeleteCompetitionMutation();

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (value: any) => {
        return (
          <span>
            <Link to={`/competitions/${value}`}>{value}</Link>
          </span>
        );
      },
    },
    {
      title: 'deltek_id',
      dataIndex: 'deltek_id',
      key: 'deltek_id',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Job Description',
      dataIndex: ['job_description', 'name'],
      key: 'job_description.name',
    },
    {
      title: 'Classification',
      dataIndex: ['job_description', 'classification'],
      key: 'job_description.classification',
      render: (classification: any) => {
        const {
          occupation_group: { code },
          grid: { name },
        } = classification;
        return (
          <span>
            {code} {name}
          </span>
        );
      },
    },
    {
      title: 'Recruiter',
      dataIndex: 'recruiter',
      key: 'recruiter',
      render: (recruiter: any) => {
        const { name } = recruiter;
        return <span>{name}</span>;
      },
    },
    {
      title: 'State',
      dataIndex: 'state',
      key: 'state',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: any) => (
        <span>
          <Button
            danger
            type="primary"
            onClick={() => {
              deleteCompetition(record.id);
            }}
          >
            Delete
          </Button>
        </span>
      ),
    },
  ];

  return (
    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
      <div>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 'auto' }}>
            <h1 style={{ marginBottom: 0 }}>Competitions</h1>
          </div>
          <div style={{ flex: '0', flexShrink: 0 }}>
            <Link to="/competitions/create">
              <Button icon={<PlusOutlined />} style={{ backgroundColor: 'green' }} type="primary">
                Create New
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: '#FFF', padding: '1rem' }}>
        <Space direction="vertical">Filters</Space>
      </div>
      <Table
        columns={columns}
        dataSource={data?.competitions}
        loading={isLoading}
        rowKey="id"
        style={{ border: '1px solid #CCC' }}
      />
    </Space>
  );
};
