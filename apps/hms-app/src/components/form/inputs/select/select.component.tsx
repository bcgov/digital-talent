import { Form } from 'antd';
import { Controller, useFormContext } from 'react-hook-form';
import Select, { GroupBase, OnChangeValue, OptionsOrGroups, SingleValue } from 'react-select';

export interface FormSelectOption {
  description?: string | undefined;
  label: string;
  value: string;
}

interface FormSelectProps {
  label: string;
  name: string;
  options: OptionsOrGroups<FormSelectOption, GroupBase<FormSelectOption>>;
}

const formatOptionLabel = ({ description, value, label }: FormSelectOption) => {
  return (
    <div style={{ display: 'flex' }}>
      <div>{label}</div>
      <div style={{ marginLeft: '10px', color: '#ccc' }}>{description}</div>
    </div>
  );
};

export const FormSelect = ({ label, name, options }: FormSelectProps) => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

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
          <Select
            {...field}
            isClearable
            formatOptionLabel={formatOptionLabel}
            options={options}
            onChange={(value: OnChangeValue<FormSelectOption, boolean>) => {
              const newVal = Array.isArray(value)
                ? value.map((v) => v.value)
                : (value as SingleValue<FormSelectOption>)?.value;

              setValue(name, newVal);
            }}
            value={
              Array.isArray(options)
                ? options.filter((o) => o.value === field.value)
                : options.find((o) => (o as FormSelectOption).value === field.value)
            }
          />
        </Form.Item>
      )}
    />
  );
};
