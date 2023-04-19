import { InputNumber, InputNumberProps } from 'antd';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { FloatLabel } from './float-label.component';

export interface FloatInputNumberProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<FieldValues, any>;
  name: string;
  label: string;
  inputProps?: InputNumberProps;
}

export const FloatInputNumber = ({ control, name, label, inputProps }: FloatInputNumberProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FloatLabel label={label} value={field.value}>
            <InputNumber style={{ width: '100%' }} {...inputProps} size="small" {...field} />
          </FloatLabel>
        );
      }}
    />
  );
};
