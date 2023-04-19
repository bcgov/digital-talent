/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconPlus } from '@tabler/icons-react';
import { Button, Col, Row, Space, Typography } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetHiringManagersQuery } from '../../../redux/services/hiring-manager';
import { useGetPicklistQuery } from '../../../redux/services/picklist';
import { Routes } from '../../../router/route.constants';

export const HiringManagerListPage = () => {
  const [ministryMap, setMinistryMap] = useState<Record<string, string>>();
  const { Title } = Typography;
  const { data, isLoading } = useGetHiringManagersQuery();
  const { data: ministryData } = useGetPicklistQuery({ scope: 'ministries' });

  useEffect(() => {
    if (ministryData?.data) {
      const map: Record<string, string> = {};

      ministryData.data.forEach((d: Record<string, any>) => {
        map[d.value] = d.label;
      });

      setMinistryMap(map);
    }
  }, [ministryData]);

  const columns: ColumnsType<Record<string, unknown>> = [
    {
      key: 'name',
      dataIndex: 'name',
      title: 'Name',
    },
    {
      key: 'email',
      dataIndex: 'email',
      title: 'Email',
    },
    {
      key: 'ministry.name',
      dataIndex: 'ministry_id',
      title: 'Ministry',
      render: (value) => {
        return <span>{ministryMap ? ministryMap[value] : ''}</span>;
      },
    },
    {
      key: 'actions',
      title: 'Actions',
      fixed: 'right',
      width: 100,
      render: (_, record) => {
        return (
          <div>
            <Link to={Routes.App.HiringManager.DETAIL(record.id as string)}>
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
          <Title>Hiring Managers</Title>
        </Col>
        <Col>
          <Link to={Routes.App.HiringManager.CREATE}>
            <Button type="primary">
              <Space direction="horizontal" size="small">
                <IconPlus size={12} />
                New Hiring Manager
              </Space>
            </Button>
          </Link>
        </Col>
      </Row>
      <Table columns={columns} dataSource={data?.data} loading={isLoading} scroll={{ x: 1000 }} size="small" />
    </>
  );
};
