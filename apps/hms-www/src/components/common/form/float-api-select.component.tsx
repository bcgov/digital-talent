import { useGetPicklistQuery } from '../../../redux/services/picklist';
import { FloatSelect, FloatSelectProps } from './float-select.component';

export interface FloatApiSelectProps extends FloatSelectProps {
  context: 'digital-talent-roles' | 'locations' | 'ministries';
}

export const FloatApiSelect = ({ control, name, label, inputProps, context }: FloatApiSelectProps) => {
  const { data, isLoading } = useGetPicklistQuery(context);

  return (
    <FloatSelect
      control={control}
      label={label}
      name={name}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      inputProps={{
        allowClear: true,
        loading: isLoading,
        options: (data?.data ?? []) as { label: string; value: string }[],
        ...inputProps,
      }}
    />
  );
};
