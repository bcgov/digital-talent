/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, Col, notification, Row, Space, Typography } from 'antd';
import { isUUID } from 'class-validator';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { FloatApiSelect } from '../../../components/common/form/float-api-select.component';
import { FloatDatePicker } from '../../../components/common/form/float-datepicker.component';
import { FloatSelect } from '../../../components/common/form/float-select.component';
import {
  useCreateOpportunityMutation,
  useLazyGetOpportunityQuery,
  useUpdateOpportunityMutation,
} from '../../../redux/services/opportunity';
import { Routes } from '../../../router/route.constants';

const serialize = ({ available_as_of_date, ...data }: Record<string, any>) => {
  return {
    ...data,
    available_as_of_date: available_as_of_date != null ? dayjs(available_as_of_date).format('YYYY-MM-DD') : null,
  };
};

const deserialize = ({ available_as_of_date, ...data }: Record<string, any>) => {
  return {
    ...data,
    available_as_of_date: dayjs(available_as_of_date).isValid() ? dayjs(available_as_of_date) : null,
  };
};

export const OpportunityDetailPage = () => {
  const [data, setData] = useState<Record<string, any>>();
  const [trigger, result] = useLazyGetOpportunityQuery();
  const [createOpportunity, createResult] = useCreateOpportunityMutation();
  const [updateOpportunity, updateResult] = useUpdateOpportunityMutation();
  const { Title } = Typography;
  const navigate = useNavigate();
  const params = useParams();

  const { control, handleSubmit } = useForm({
    defaultValues: {},
    values: data,
  });

  useEffect(() => {
    // This runs when the page is accessed with opportunities/:id
    if (params.id) {
      if (isUUID(params.id, 4)) {
        trigger(params.id);
      } else {
        notification.open({
          key: 'error',
          message: 'Could not find the associated Opportunity',
          type: 'error',
        });
        navigate(Routes.App.Opportunity.ROOT);
      }
    }
  }, [navigate, trigger, params]);

  useEffect(() => {
    const { requestId, isUninitialized, isLoading, isSuccess, isError } = params.id ? updateResult : createResult;

    if (!isUninitialized && !isLoading) {
      if (isSuccess) {
        notification.open({
          key: requestId,
          message: `Opportunity ${params.id ? 'Updated' : 'Created'}`,
          type: 'success',
        });
        if (params.id == null) {
          navigate(Routes.App.Opportunity.ROOT);
        }
      }

      if (isError) {
        notification.open({
          key: requestId,
          message: 'Could Not Update Opportunity',
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
      await updateOpportunity(serialize(data));
    } else {
      await createOpportunity(serialize(data));
    }
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md={12} xs={24}>
            <Title>Opportunity Detail</Title>
          </Col>
          <Col md={12} xs={24}>
            <FloatApiSelect
              control={control}
              label="Hiring Manager"
              name="hiring_manager_id"
              scope="hiring-managers"
              inputProps={{
                filterOption: (input, option) => {
                  return (option?.label as string).toLowerCase().includes(input.toLowerCase());
                },
              }}
            />
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
                  <FloatApiSelect control={control} label="Role" name="role_id" scope="digital-talent-roles" />
                </Col>
                <Col md={6} xs={24}>
                  <FloatSelect
                    control={control}
                    label="Duration of Opportunity"
                    name="duration"
                    inputProps={{
                      options: [...Array(13)].map((_, index) => {
                        let label = '';
                        if (index === 12) {
                          label = '1+ Year';
                        } else {
                          label = `${index + 1} Months`;
                        }

                        return {
                          label,
                          value: index,
                        };
                      }),
                    }}
                  />
                </Col>
                <Col md={6} xs={24}>
                  <FloatDatePicker control={control} label="Available As Of" name="available_as_of_date" />
                </Col>
                <Col md={6} xs={24}>
                  <FloatSelect
                    control={control}
                    label="State"
                    name="state"
                    inputProps={{
                      options: [
                        {
                          label: 'Open',
                          value: 'OPEN',
                        },
                        {
                          label: 'Closed',
                          value: 'CLOSED',
                        },
                      ],
                    }}
                  />
                </Col>
              </Row>
            </Card>
          </div>
          <div>
            <Title level={2} style={{ fontSize: '20px' }}>
              Matching Criteria
            </Title>
            <Card size="small">
              <Row gutter={[8, 8]}>
                <Col xs={24}>
                  <FloatApiSelect
                    control={control}
                    inputProps={{ mode: 'multiple' }}
                    label="Preferred Locations"
                    name="location_ids"
                    scope="locations"
                  />
                </Col>
                <Col xs={24}>
                  <FloatApiSelect
                    control={control}
                    label="Required Skills"
                    name="required_skill_ids"
                    scope="skills"
                    inputProps={{
                      filterOption: (input, option) => {
                        return (option?.label as string).toLowerCase().includes(input.toLowerCase());
                      },
                      mode: 'multiple',
                    }}
                  />
                </Col>
                <Col xs={24}>
                  <FloatApiSelect
                    control={control}
                    label=" Optional Skills"
                    name="optional_skill_ids"
                    scope="skills"
                    inputProps={{
                      filterOption: (input, option) => {
                        return (option?.label as string).toLowerCase().includes(input.toLowerCase());
                      },
                      mode: 'multiple',
                    }}
                  />
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
