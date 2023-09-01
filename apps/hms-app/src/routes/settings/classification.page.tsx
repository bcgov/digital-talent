import { Space, Table } from 'antd';
import { useGetClassificationsQuery } from '../../redux/services/graphql-api/classification-api.service';

export const ClassificationPage = () => {
  const { data, isLoading } = useGetClassificationsQuery();

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Occupation Group',
      dataIndex: ['occupation_group', 'name'],
      key: 'occupation_group.name',
    },
    {
      title: 'Code',
      dataIndex: ['occupation_group', 'code'],
      key: 'occupation_group.code',
    },
    {
      title: 'Grid',
      dataIndex: ['grid', 'name'],
      key: 'grid.name',
    },
    {
      title: 'Rate Adjustment',
      dataIndex: 'rate_adjustment',
      key: 'rate_adjustment',
      render: (value: any) => {
        return <span>{(value * 100).toFixed(1)}%</span>;
      },
    },
  ];

  return (
    <div style={{ margin: '1rem 2rem' }}>
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        <h1 style={{ marginBottom: 0 }}>Classifications</h1>
        <Table
          columns={columns}
          dataSource={data?.classifications}
          loading={isLoading}
          rowKey="id"
          style={{ border: '1px solid #CCC' }}
        />
      </Space>
    </div>
  );
};
