/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
// Source: https://github.com/ant-design/ant-design/issues/16323#issuecomment-653804784
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;

  & > .ant-input {
    padding: 16px 12px 4px 11px;
  }

  & > .ant-input-number {
    padding: 16px 12px 4px 11px;
  }

  & > .ant-input-number .ant-input-number-input-wrap .ant-input-number-input {
    padding: 0 0;
  }

  & > .ant-picker {
    padding: 16px 12px 4px 11px;
  }

  & > .ant-select .ant-select-selector {
    padding: 16px 10px 4px 11px;
  }

  & > .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    padding: 16px 10px 4px 11px;
    height: 48px;
  }

  & > .ant-select-single .ant-select-selector .ant-select-selection-search {
    top: 16px;
  }
`;

interface LabelProps {
  float: boolean;
}

const Label = styled.label<LabelProps>`
  font-size: 12px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 12px;
  top: 12px;
  transition: 0.2s ease all;
  ${({ float }) => float && 'top: 6px; font-size: 10px'}
`;

interface FloatLabelProps {
  children: React.ReactNode;
  label: string;
  value?: string;
}

export const FloatLabel = ({ children, label, value }: FloatLabelProps) => {
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <Container onBlur={() => setFocus(false)} onFocus={() => setFocus(true)}>
      {children}
      <Label float={focus || ((value && value.length !== 0) as boolean)}>{label}</Label>
    </Container>
  );
};
