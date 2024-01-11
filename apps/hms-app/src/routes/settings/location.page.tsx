import { Space, Table } from 'antd';
import dayjs from 'dayjs';
import { useGetLocationsQuery } from '../../redux/services/graphql-api/location-api.service';

export const LocationPage = () => {
  const { data, isLoading } = useGetLocationsQuery();

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
      title: 'Region',
      dataIndex: 'region',
      key: 'region',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Postal Code',
      dataIndex: 'postal_code',
      key: 'postal_code',
    },
    {
      title: 'Lat',
      dataIndex: 'lat',
      key: 'lat',
    },
    {
      title: 'Lon',
      dataIndex: 'lon',
      key: 'lon',
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
    <div style={{ margin: '1rem 2rem' }}>
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        <h1 style={{ marginBottom: 0 }}>Locations</h1>
        <Table
          columns={columns}
          dataSource={data?.locations}
          loading={isLoading}
          rowKey="id"
          style={{ border: '1px solid #CCC' }}
        />
      </Space>
    </div>
  );
};
