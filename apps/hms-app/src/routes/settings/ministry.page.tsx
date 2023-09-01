import { Space, Table } from 'antd';
import { useGetMinistriesQuery } from '../../redux/services/graphql-api/ministry-api.service';

export const MinistryPage = () => {
  const { data, isLoading } = useGetMinistriesQuery();

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Deltek ID',
      dataIndex: 'deltek_id',
      key: 'deltek_id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
  ];

  return (
    <div style={{ margin: '1rem 2rem' }}>
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        <h1 style={{ marginBottom: 0 }}>Ministries</h1>
        <Table
          columns={columns}
          dataSource={data?.ministries}
          loading={isLoading}
          rowKey="id"
          style={{ border: '1px solid #CCC' }}
        />
      </Space>
    </div>
  );
};
