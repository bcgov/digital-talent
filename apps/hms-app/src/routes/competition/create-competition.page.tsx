/* eslint-disable max-classes-per-file */
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { Button, Form, Space } from 'antd';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { GroupBase, OptionsOrGroups } from 'react-select';
import { v4 as uuidv4 } from 'uuid';
import { FormInput } from '../../components/form/inputs/input.component';
import { FormAsyncSelect } from '../../components/form/inputs/select/async-select.component';
import { FormSelect, FormSelectOption } from '../../components/form/inputs/select/select.component';
import { useCreateCompetitionMutation } from '../../redux/services/graphql-api/competitions/competition-api.service';
import { CreateCompetitionDto } from '../../redux/services/graphql-api/competitions/dtos/create-competition.dto';
import { useLazyGetJobDescriptionsPicklistQuery } from '../../redux/services/graphql-api/job-description-api.service';
import { useLazyGetRecruitersPicklistQuery } from '../../redux/services/graphql-api/users/users-api.service';

const categoryOptions: OptionsOrGroups<FormSelectOption, GroupBase<FormSelectOption>> = [
  {
    label: 'Cross-Ministry Hiring Program',
    value: 'CMH',
  },
  {
    label: 'RapidHire',
    value: 'RH',
  },
];

export const CreateCompetitionPage = () => {
  const [id] = useState<string>(uuidv4());
  const navigate = useNavigate();
  const [createCompetition, createCompetitionResult] = useCreateCompetitionMutation();

  const onSubmit = (data: any) => {
    createCompetition(data);
  };

  const methods = useForm({
    defaultValues: {
      id,
    },
    values: {},
    resolver: classValidatorResolver(CreateCompetitionDto),
  });

  useEffect(() => {
    const { isSuccess } = createCompetitionResult;
    if (isSuccess) navigate(`/competitions/${id}`);
  }, [createCompetitionResult, navigate]);

  return (
    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
      <h1 style={{ marginBottom: 0 }}>Create Competition</h1>
      <div style={{ backgroundColor: '#FFF', padding: '1rem' }}>
        <FormProvider {...methods}>
          <Form labelCol={{ span: 6 }} onFinish={methods.handleSubmit(onSubmit)} wrapperCol={{ span: 14 }}>
            <FormInput label="ID" name="id" props={{ formItem: { hidden: true } }} />
            <FormAsyncSelect
              label="Job Description"
              name="job_description_id"
              query={useLazyGetJobDescriptionsPicklistQuery()}
            />
            <FormAsyncSelect label="Recruiter ID" name="recruiter_id" query={useLazyGetRecruitersPicklistQuery()} />
            <FormInput label="Req #" name="deltek_id" />
            <FormSelect label="Category" name="category" options={categoryOptions} />
            <Button htmlType="submit" type="primary">
              Submit
            </Button>
          </Form>
        </FormProvider>
      </div>
    </Space>
  );
};
