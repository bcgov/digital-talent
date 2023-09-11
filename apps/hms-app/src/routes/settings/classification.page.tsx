import { Space, Table } from 'antd';
import dayjs from 'dayjs';
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
    {
      title: 'Created Date',
      dataIndex: 'created_at',
      key: 'created_at',
      render: (value?: string) => {
        return (
          <span title={value != null ? dayjs(value).format('MMM d, YYYY @ h:mm:ss.SSS A') : ''}>
            {value != null ? dayjs(value).format('MMM d, YYYY') : ''}
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
          <span title={value != null ? dayjs(value).format('MMM d, YYYY @ h:mm:ss.SSS A') : ''}>
            {value != null ? dayjs(value).format('MMM d, YYYY') : ''}
          </span>
        );
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
