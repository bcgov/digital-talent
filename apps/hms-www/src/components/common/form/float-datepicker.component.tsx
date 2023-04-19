import { DatePicker, DatePickerProps } from 'antd';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { FloatLabel } from './float-label.component';

export interface FloatDatePickerProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<FieldValues, any>;
  name: string;
  label: string;
  inputProps?: DatePickerProps;
}

export const FloatDatePicker = ({ control, name, label, inputProps }: FloatDatePickerProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FloatLabel label={label} value={field.value}>
            <DatePicker placeholder="" style={{ width: '100%' }} {...inputProps} {...field} />
          </FloatLabel>
        );
      }}
    />
  );
};
