import { Space, Table } from 'antd';
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
