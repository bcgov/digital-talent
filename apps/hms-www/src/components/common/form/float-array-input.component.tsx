import { Button, Col, InputProps, Row } from 'antd';
import { Control, FieldValues, useFieldArray } from 'react-hook-form';
import { FloatInput } from './float-input.component';

export interface FloatInputArrayProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<FieldValues, any>;
  name: string;
  label: string;
  inputProps?: InputProps;
}

export const FloatInputArray = ({ control, name, label, inputProps }: FloatInputArrayProps) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <ul style={{ listStyleType: 'none', listStylePosition: 'inside', padding: 0, margin: 0 }}>
        {fields.map((item, index) => {
          return (
            <li key={item.id}>
              <Row align="middle" gutter={8} style={{ marginBottom: 8 }}>
                <Col flex="auto">
                  <FloatInput control={control} inputProps={inputProps} label={label} name={`${name}.${index}`} />
                </Col>
                <Col>
                  <Button danger onClick={() => remove(index)} size="small" type="primary">
                    X
                  </Button>
                </Col>
              </Row>
            </li>
          );
        })}
        <Button onClick={() => append('')} style={{ width: '100%' }} type="dashed">
          Add a {label}
        </Button>
      </ul>
    </div>
  );
};
