import { Space, Table, Tag } from 'antd';
import dayjs from 'dayjs';
import { useGetUsersQuery } from '../../redux/services/graphql-api/users/users-api.service';

export const UserListPage = () => {
  const { data, isLoading } = useGetUsersQuery();

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
      title: 'Name',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Roles',
      dataIndex: 'roles',
      key: 'roles',
      render: (roles: string[]) => {
        return roles.map((v) => {
          const role = (() => {
            switch (v) {
              case 'admin':
                return 'Admin';
              case 'hiring-manager':
                return 'Hiring Manager';
              case 'recruiter':
                return 'Recruiter';
              default:
                return null;
            }
          })();

          return role ? <Tag key={v}>{role}</Tag> : <span />;
        });
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
    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
      <div>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 'auto' }}>
            <h1 style={{ marginBottom: 0 }}>Users</h1>
          </div>
          <div style={{ flex: '0', flexShrink: 0 }} />
        </div>
      </div>
      <div style={{ backgroundColor: '#FFF', padding: '1rem' }}>
        <Space direction="vertical">Filters</Space>
      </div>
      <Table
        columns={columns}
        dataSource={data?.users}
        loading={isLoading}
        rowKey="id"
        style={{ border: '1px solid #CCC' }}
      />
    </Space>
  );
};
