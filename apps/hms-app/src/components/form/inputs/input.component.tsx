import { Form, FormItemProps, Input } from 'antd';
import { ReactNode } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface FormInputProps {
  label?: string | undefined;
  name: string;
  placeholder?: string | undefined;
  prefix?: ReactNode | undefined;
  props?: {
    formItem?: FormItemProps;
  };
}

export const FormInput = ({ label, name, placeholder, prefix, props }: FormInputProps) => {
  const { formItem: formItemProps } = props ?? {};

  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();

  return formItemProps?.hidden === true ? (
    <input {...register(name)} type="hidden" />
  ) : (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Form.Item
          {...formItemProps}
          help={errors?.[name]?.message as string | undefined}
          label={label}
          validateStatus={errors?.[name]?.message ? 'error' : 'success'}
        >
          <Input {...field} allowClear placeholder={placeholder} prefix={prefix} />
        </Form.Item>
      )}
    />
  );
};
