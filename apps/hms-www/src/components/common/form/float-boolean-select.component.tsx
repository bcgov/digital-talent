import { FloatSelect, FloatSelectProps } from './float-select.component';

export interface FloatBooleanSelectProps extends FloatSelectProps {}

export const FloatBooleanSelect = ({ control, name, label, inputProps }: FloatBooleanSelectProps) => {
  return (
    <FloatSelect
      control={control}
      label={label}
      name={name}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      inputProps={{
        allowClear: true,
        options: [
          {
            label: 'Yes',
            value: 'true',
          },
          {
            label: 'No',
            value: 'false',
          },
        ],
        ...inputProps,
      }}
    />
  );
};
