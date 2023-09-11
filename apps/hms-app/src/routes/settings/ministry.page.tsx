import { Space, Table } from 'antd';
import dayjs from 'dayjs';
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
