import { Space, Table } from 'antd';
import { useGetJobDescriptionsQuery } from '../../redux/services/graphql-api/job-description-api.service';

export const JobDescriptionPage = () => {
  const { data, isLoading } = useGetJobDescriptionsQuery();

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Classification',
      dataIndex: ['classification'],
      key: 'classification',
      render: (value: any) => {
        const {
          occupation_group: { code },
          grid: { name },
        } = value;

        return (
          <span>
            {code} {name}
          </span>
        );
      },
    },
    {
      title: 'Salary Range',
      dataIndex: ['classification', 'grid', 'steps'],
      key: 'classification.grid.steps',
      align: 'right' as const,
      render: (value: any) => {
        const salaries = value.map((v: Record<PropertyKey, any>) => v.rate_per_year);
        const { format: formatCurrency } = Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        });

        return (
          <span>
            {formatCurrency(Math.min(...salaries))} - {formatCurrency(Math.max(...salaries))}
          </span>
        );
      },
    },
  ];

  return (
    <div style={{ margin: '1rem 2rem' }}>
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        <h1 style={{ marginBottom: 0 }}>Job Descriptions</h1>
        <Table
          columns={columns}
          dataSource={(data ?? {})?.jobDescriptions}
          loading={isLoading}
          rowKey="id"
          style={{ border: '1px solid #CCC' }}
        />
      </Space>
    </div>
  );
};
