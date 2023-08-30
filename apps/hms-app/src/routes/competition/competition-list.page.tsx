import { Button, Space, Table } from 'antd';
import { useGetCompetitionsQuery } from '../../redux/services/graphql-api/competition-api.service';

export const CompetitionListPage = () => {
  const { data, isLoading } = useGetCompetitionsQuery();

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'classification_id',
      dataIndex: 'classification_id',
      key: 'classification_id',
    },
    {
      title: 'recruiter_id',
      dataIndex: 'recruiter_id',
      key: 'recruiter_id',
    },
    {
      title: 'category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'state',
      dataIndex: 'state',
      key: 'state',
    },
    {
      title: 'deltek_id',
      dataIndex: 'deltek_id',
      key: 'deltek_id',
    },
    {
      title: 'Action',
      key: 'action',
      // render: (text: string, record: any) => (
      render: () => (
        <span>
          <Button
            danger
            type="primary"
            // onClick={(e) => {
            //   e.stopPropagation(); // Stop the event propagation here
            //   handleDelete(record.id);
            // }}
          >
            Delete
          </Button>
        </span>
      ),
    },
  ];

  return (
    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
      <h1 style={{ marginBottom: 0 }}>Competitions</h1>
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
