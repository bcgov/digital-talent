/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
import { Button, Card, Col, notification, Row, Space, Typography } from 'antd';
import { isUUID } from 'class-validator';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { FloatApiSelect } from '../../../components/common/form/float-api-select.component';
import { FloatInputArray } from '../../../components/common/form/float-array-input.component';
import { FloatBooleanSelect } from '../../../components/common/form/float-boolean-select.component';
import { FloatDatePicker } from '../../../components/common/form/float-datepicker.component';
import { FloatInputNumber } from '../../../components/common/form/float-input-number.component';
import { FloatInput } from '../../../components/common/form/float-input.component';
import { FloatSelect } from '../../../components/common/form/float-select.component';
import { useLazyGetCandidateQuery, useUpdateCandidateMutation } from '../../../redux/services/candidate';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const serialize = (data: Record<string, any>) => {
  const { assigned_to_id, available_as_of_date, is_contacted, residency_status, status, would_relocate, ...rest } =
    data;

  const delta = {
    assigned_to_id: assigned_to_id == null ? null : assigned_to_id,
    available_as_of_date: dayjs(available_as_of_date).format('YYYY-MM-DD'),
    is_contacted: is_contacted === 'true' ? true : is_contacted === 'false' ? false : null,
    residency_status: residency_status == null ? null : residency_status,
    status: status == null ? null : status,
    would_relocate: would_relocate === 'true' ? true : would_relocate === 'false' ? false : null,
    ...rest,
  };

  return delta;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const deserialize = (data: Record<string, any>) => {
  const { available_as_of_date, is_contacted, would_relocate, ...rest } = data;

  const availableAsOfDate = dayjs(available_as_of_date).isValid() ? dayjs(available_as_of_date) : null;

  return {
    available_as_of_date: availableAsOfDate,
    is_contacted: is_contacted === true ? 'true' : is_contacted === false ? 'false' : null,
    would_relocate: would_relocate === true ? 'true' : would_relocate === false ? 'false' : null,
    ...rest,
  };
};

export const CandidateDetailPage = () => {
  const { Title } = Typography;
  const params = useParams();
  const [error, setError] = useState<number | undefined>(undefined);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<Record<string, any>>();
  const [trigger, result] = useLazyGetCandidateQuery();
  const [updateCandidate, updateResult] = useUpdateCandidateMutation();

  useEffect(() => {
    const { requestId, isUninitialized, isLoading, isSuccess, isError } = updateResult;

    if (!isUninitialized && !isLoading) {
      if (isSuccess) {
        notification.open({
          key: requestId,
          message: 'Candidate Updated',
          type: 'success',
        });
      }

      if (isError) {
        notification.open({
          key: requestId,
          message: 'Could Not Update Candidate',
          type: 'error',
        });
      }
    }
  }, [updateResult]);

  useEffect(() => {
    notification.open({
      key: 'error',
      message: error,
      type: 'error',
    });
  }, [error]);

  useEffect(() => {
    if (params.id) {
      if (isUUID(params.id, 4)) {
        trigger(params.id);
      } else {
        setError(404);
      }
    }
  }, [trigger, params]);

  useEffect(() => {
    if (result.data) {
      setData(deserialize(result.data.data));
    }
  }, [result.data]);

  const { control, handleSubmit } = useForm({
    defaultValues: {},
    values: data,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: Record<string, any>) => {
    await updateCandidate(serialize(data));
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md={12} xs={24}>
            <Title>Candidate Detail</Title>
          </Col>
          <Col md={12} xs={24}>
            <FloatApiSelect
              control={control}
              label="Assigned To"
              name="assigned_to_id"
              scope="users"
              filter={{
                filter: {
                  roles: {
                    $in: ['dtad-team'],
                  },
                },
              }}
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
                  <FloatInput control={control} label="Name" name="name" />
                </Col>
                <Col md={6} xs={24}>
                  <FloatInput control={control} label="Email Address" name="email_address" />
                </Col>
                <Col md={12} xs={24}>
                  <FloatInput control={control} label="LinkedIn Url" name="linkedin_url" />
                </Col>

                <Col md={4} xs={24}>
                  <FloatSelect
                    control={control}
                    label="Residency Status"
                    name="residency_status"
                    inputProps={{
                      options: [
                        {
                          label: 'Citizen',
                          value: 'CITIZEN',
                        },
                        {
                          label: 'Permanent Residency',
                          value: 'PR',
                        },
                        {
                          label: 'Permanent Residency (WIP)',
                          value: 'PR_WIP',
                        },
                        {
                          label: 'Work Permit',
                          value: 'PERMIT',
                        },
                        {
                          label: 'Ineligible',
                          value: 'INELIGIBLE',
                        },
                      ],
                    }}
                  />
                </Col>
                <Col md={4} xs={24}>
                  <FloatSelect
                    control={control}
                    label="Candidate Status"
                    name="status"
                    inputProps={{
                      options: [
                        {
                          label: 'Hired',
                          value: 'HIRED',
                        },
                      ],
                    }}
                  />
                </Col>
                <Col md={4} xs={24}>
                  <FloatInputNumber control={control} label="Years of Experience" name="num_years_exp" />
                </Col>
                <Col md={4} xs={24}>
                  <FloatDatePicker control={control} label="Available As Of" name="available_as_of_date" />
                </Col>
                <Col md={4} xs={24}>
                  <FloatBooleanSelect control={control} label="Would Relocate" name="would_relocate" />
                </Col>
                <Col md={4} xs={24}>
                  <FloatBooleanSelect control={control} label="Has Been Contacted" name="is_contacted" />
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
                <Col md={6} xs={24}>
                  <FloatApiSelect control={control} label="Role" name="role_id" scope="digital-talent-roles" />
                </Col>
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
                    label="Skills"
                    name="skill_ids"
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
          <div>
            <Title level={2} style={{ fontSize: '20px' }}>
              Links
            </Title>
            <Row gutter={[8, 8]}>
              <Col xs={24}>
                <Card size="small">
                  <FloatInputArray control={control} inputProps={{ size: 'small' }} label="Link" name="links" />
                </Card>
              </Col>
            </Row>
          </div>
          <div>
            <Title level={2} style={{ fontSize: '20px' }}>
              Knowledge and Abilities
            </Title>
            <Row gutter={[8, 8]}>
              <Col xs={24}>
                <Card size="small">
                  <FloatInputArray
                    control={control}
                    inputProps={{ size: 'small' }}
                    label="Knowledge/Ability"
                    name="knowledge_and_abilities"
                  />
                </Card>
              </Col>
            </Row>
          </div>
          <div>
            <Title level={2} style={{ fontSize: '20px' }}>
              Marketing Qualities
            </Title>
            <Row gutter={[8, 8]}>
              <Col xs={24}>
                <Card size="small">
                  <FloatInputArray
                    control={control}
                    inputProps={{ size: 'small' }}
                    label="Marketing Quality"
                    name="marketing_qualities"
                  />
                </Card>
              </Col>
            </Row>
          </div>
        </Space>
        {/* <FloatInput control={control} name="" label="" /> */}
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};
