/* eslint-disable @typescript-eslint/no-explicit-any */
import { DefaultOptionType } from 'antd/es/select';
import { PicklistScope, useGetPicklistQuery } from '../../../redux/services/picklist';
import { FloatSelect, FloatSelectProps } from './float-select.component';

export interface FloatApiSelectProps extends FloatSelectProps {
  scope: PicklistScope;
  filter?: Record<string, any>;
}

export const FloatApiSelect = ({ control, name, label, inputProps, scope, filter }: FloatApiSelectProps) => {
  const { data, isLoading } = useGetPicklistQuery({ scope, filter });

  return (
    <FloatSelect
      control={control}
      label={label}
      name={name}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      inputProps={{
        allowClear: true,
        loading: isLoading,
        options: (data?.data ?? []) as DefaultOptionType[],
        ...inputProps,
      }}
    />
  );
};
