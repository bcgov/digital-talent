import { IconExternalLink, IconPlus } from '@tabler/icons-react';
import { Button, Col, Row, Space, Table, Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import { useGetCandidatesQuery } from '../../../redux/services/candidate';
import { Routes } from '../../../router/route.constants';

export const CandidateListPage = () => {
  const { Title } = Typography;
  const { data, isLoading } = useGetCandidatesQuery();

  const columns: ColumnsType<Record<string, unknown>> = [
    {
      key: 'name',
      dataIndex: 'name',
      title: 'Name',
    },
    {
      key: 'email_address',
      dataIndex: 'email_address',
      title: 'Email Address',
    },
    {
      key: 'linkedin_url',
      dataIndex: 'linkedin_url',
      title: 'LinkedIn',
      render: (value) => {
        try {
          const url = new URL(value);
          return (
            <a href={url.href} rel="noreferrer" target="_blank">
              <Button>
                <Space size="small">
                  <IconExternalLink size={12} />
                  Open
                </Space>
              </Button>
            </a>
          );
        } catch (error) {
          return '';
        }
      },
    },
    {
      key: 'num_years_exp',
      dataIndex: 'num_years_exp',
      title: '# Years Exp',
    },
    {
      key: 'available_as_of_date',
      dataIndex: 'available_as_of_date',
      title: 'Available',
    },
    {
      key: 'would_relocate',
      dataIndex: 'would_relocate',
      title: 'Would Relocate',
    },
    {
      key: 'residency_status',
      dataIndex: 'residency_status',
      title: 'Residency Status',
    },
    {
      key: 'status',
      dataIndex: 'status',
      title: 'Status',
    },
    {
      key: 'is_contacted',
      dataIndex: 'is_contacted',
      title: 'Contacted?',
    },
    {
      key: 'actions',
      title: 'Actions',
      fixed: 'right',
      width: 100,
      render: (_, record) => {
        return (
          <div>
            <Link to={Routes.App.Candidate.DETAIL(record.id as string)}>
              <Button>Edit</Button>
            </Link>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Row>
        <Col flex="1">
          <Title>Candidates</Title>
        </Col>
        <Col>
          <Link to={Routes.App.Candidate.CREATE}>
            <Button type="primary">
              <Space direction="horizontal" size="small">
                <IconPlus size={12} />
                New Candidate
              </Space>
            </Button>
          </Link>
        </Col>
      </Row>
      <Table columns={columns} dataSource={data?.data} loading={isLoading} scroll={{ x: 1000 }} size="small" />
    </>
  );
};
