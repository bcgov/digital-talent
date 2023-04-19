/* eslint-disable no-console */
import { Select, SelectProps } from 'antd';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { FloatLabel } from './float-label.component';

export interface FloatSelectProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<FieldValues, any>;
  name: string;
  label: string;
  inputProps?: SelectProps;
}

export const FloatSelect = ({ control, name, label, inputProps }: FloatSelectProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FloatLabel label={label} value={field.value}>
            <Select allowClear style={{ width: '100%' }} {...inputProps} {...field} />
          </FloatLabel>
        );
      }}
    />
  );
};
