/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconPlus } from '@tabler/icons-react';
import { Button, Col, Row, Space, Table, Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetOpportunitiesQuery } from '../../../redux/services/opportunity';
import { useGetPicklistQuery } from '../../../redux/services/picklist';
import { Routes } from '../../../router/route.constants';

export const OpportunityListPage = () => {
  const [hiringManagerMap, setHiringManagerMap] = useState<Record<string, string>>();
  const [roleMap, setRoleMap] = useState<Record<string, string>>();
  const { Title } = Typography;
  const { data, isLoading } = useGetOpportunitiesQuery();
  const { data: hiringManagerData } = useGetPicklistQuery({ scope: 'hiring-managers' });
  const { data: roleData } = useGetPicklistQuery({ scope: 'digital-talent-roles' });

  useEffect(() => {
    if (hiringManagerData?.data) {
      const map: Record<string, string> = {};

      hiringManagerData.data.forEach((d: Record<string, any>) => {
        map[d.value] = d.label;
      });

      setHiringManagerMap(map);
    }
  }, [hiringManagerData]);

  useEffect(() => {
    if (roleData?.data) {
      const map: Record<string, string> = {};

      roleData.data.forEach((d: Record<string, any>) => {
        map[d.value] = d.label;
      });

      setRoleMap(map);
    }
  }, [roleData]);

  const columns: ColumnsType<Record<string, unknown>> = [
    {
      key: 'hiring_manager.name',
      dataIndex: 'hiring_manager_id',
      title: 'Hiring Manager',
      render: (value) => {
        return <span>{hiringManagerMap ? hiringManagerMap[value] : ''}</span>;
      },
    },
    {
      key: 'role.name',
      dataIndex: 'role_id',
      title: 'Role',
      render: (value) => {
        return <span>{roleMap ? roleMap[value] : ''}</span>;
      },
    },
    {
      key: 'available_as_of_date',
      dataIndex: 'available_as_of_date',
      title: 'Available',
    },
    {
      key: 'duration',
      dataIndex: 'duration',
      title: 'Duration',
      render: (value: number | null) => {
        let label = '';

        switch (value) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
          case 10:
          case 11:
            label = `${value + 1} Months`;
            break;
          case 12:
            label = `1+ Year`;
            break;
        }

        return <span>{label}</span>;
      },
    },
    {
      key: 'state',
      dataIndex: 'state',
      title: 'State',
      render: (value) => (value ? `${value[0].toUpperCase()}${value.substring(1).toLowerCase()}` : ''),
    },
    {
      key: 'actions',
      title: 'Actions',
      fixed: 'right',
      width: 100,
      render: (_, record) => {
        return (
          <div>
            <Link to={Routes.App.Opportunity.DETAIL(record.id as string)}>
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
          <Title>Opportunities</Title>
        </Col>
        <Col>
          <Link to={Routes.App.Opportunity.CREATE}>
            <Button type="primary">
              <Space direction="horizontal" size="small">
                <IconPlus size={12} />
                New Opportunity
              </Space>
            </Button>
          </Link>
        </Col>
      </Row>
      <Table columns={columns} dataSource={data?.data} loading={isLoading} scroll={{ x: 1000 }} size="small" />
    </>
  );
};
