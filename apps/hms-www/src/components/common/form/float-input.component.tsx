import { Input, InputProps } from 'antd';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { FloatLabel } from './float-label.component';

export interface FloatInputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<FieldValues, any>;
  name: string;
  label: string;
  inputProps?: InputProps;
}

export const FloatInput = ({ control, name, label, inputProps }: FloatInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FloatLabel label={label} value={field.value}>
            <Input {...inputProps} {...field} />
          </FloatLabel>
        );
      }}
    />
  );
};
