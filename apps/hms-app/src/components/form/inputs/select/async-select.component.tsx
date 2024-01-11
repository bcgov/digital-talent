import { Form, Space } from 'antd';
import { useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { OnChangeValue, SingleValue } from 'react-select';
import AsyncSelect from 'react-select/async';
import { FormSelectOption } from './select.component';

interface FormAsyncSelectProps {
  label: string;
  name: string;
  query: any;
}

const formatOptionLabel = ({ description, value, label }: FormSelectOption) => {
  return (
    <Space direction="horizontal" size="small">
      <div>{label}</div>
      {description && <div style={{ color: '#A1A1A1' }}>({description})</div>}
    </Space>
  );
};

export const FormAsyncSelect = ({ label, name, query }: FormAsyncSelectProps) => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  const [trigger, { data, isLoading, isFetching }] = query;

  useEffect(() => {
    if (data == null) trigger();
  }, [data, trigger]);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Form.Item
          help={errors?.[name]?.message as string | undefined}
          label={label}
          validateStatus={errors?.[name]?.message ? 'error' : 'success'}
        >
          <AsyncSelect
            {...field}
            cacheOptions
            isClearable
            defaultOptions={data}
            formatOptionLabel={formatOptionLabel}
            isLoading={isLoading || isFetching}
            onChange={(value: OnChangeValue<FormSelectOption, boolean>) => {
              const newVal = Array.isArray(value)
                ? value.map((v) => v.value)
                : (value as SingleValue<FormSelectOption>)?.value;

              setValue(name, newVal);
            }}
            value={
              Array.isArray(data)
                ? data.filter((o) => o.value === field.value)
                : data?.find((o: any) => (o as FormSelectOption).value === field.value)
            }
          />
        </Form.Item>
      )}
    />
  );
};
