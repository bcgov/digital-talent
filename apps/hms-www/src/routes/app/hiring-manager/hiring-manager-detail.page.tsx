/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, Col, notification, Row, Space, Typography } from 'antd';
import { isUUID } from 'class-validator';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { FloatApiSelect } from '../../../components/common/form/float-api-select.component';
import { FloatInput } from '../../../components/common/form/float-input.component';
import {
  useCreateHiringManagerMutation,
  useLazyGetHiringManagerQuery,
  useUpdateHiringManagerMutation,
} from '../../../redux/services/hiring-manager';
import { Routes } from '../../../router/route.constants';

const serialize = (data: Record<string, any>) => {
  return data;
};

const deserialize = (data: Record<string, any>) => {
  return data;
};

export const HiringManagerDetailPage = () => {
  const [data, setData] = useState<Record<string, any>>();
  const [trigger, result] = useLazyGetHiringManagerQuery();
  const [createHiringManager, createResult] = useCreateHiringManagerMutation();
  const [updateHiringManager, updateResult] = useUpdateHiringManagerMutation();
  const { Title } = Typography;
  const navigate = useNavigate();
  const params = useParams();

  const { control, handleSubmit } = useForm({
    defaultValues: {},
    values: data,
  });

  useEffect(() => {
    // This runs when the page is accessed with hiring-managers/:id
    if (params.id) {
      if (isUUID(params.id, 4)) {
        trigger(params.id);
      } else {
        notification.open({
          key: 'error',
          message: 'Could not find the associated hiring manager',
          type: 'error',
        });
        navigate(Routes.App.HiringManager.ROOT);
      }
    }
  }, [navigate, trigger, params]);

  useEffect(() => {
    const { requestId, isUninitialized, isLoading, isSuccess, isError } = params.id ? updateResult : createResult;

    if (!isUninitialized && !isLoading) {
      if (isSuccess) {
        notification.open({
          key: requestId,
          message: `Hiring Manager ${params.id ? 'Updated' : 'Created'}`,
          type: 'success',
        });
        if (params.id == null) {
          navigate(Routes.App.HiringManager.ROOT);
        }
      }

      if (isError) {
        notification.open({
          key: requestId,
          message: 'Could Not Update Hiring Manager',
          type: 'error',
        });
      }
    }
  }, [createResult, navigate, params.id, updateResult]);

  useEffect(() => {
    if (result.data) {
      setData(deserialize(result.data.data));
    }
  }, [result.data]);

  const onSubmit = async (data: Record<string, any>) => {
    if (params?.id) {
      await updateHiringManager(serialize(data));
    } else {
      await createHiringManager(serialize(data));
    }
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xs={24}>
            <Title>Hiring Manager Detail</Title>
          </Col>
        </Row>
        <Space direction="vertical" size="small" style={{ width: '100%' }}>
          <div>
            <Title level={2} style={{ fontSize: '20px' }}>
              General Information
            </Title>
            <Card size="small">
              <Row gutter={[8, 8]}>
                <Col md={6} xs={24}>
                  <FloatInput control={control} label="Name" name="name" />
                </Col>
                <Col md={6} xs={24}>
                  <FloatInput control={control} label="Email" name="email" />
                </Col>
                <Col md={12} xs={24}>
                  <FloatApiSelect control={control} label="Ministry" name="ministry_id" scope="ministries" />
                </Col>
              </Row>
            </Card>
          </div>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Space>
      </form>
    </div>
  );
};
