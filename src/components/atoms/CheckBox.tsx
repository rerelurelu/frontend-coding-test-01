import { ChangeEvent, FC, useState } from 'react';
import styled, { css } from 'styled-components';
import { Prefecture } from '../../type/types';

/* Component style */
// Props
type BoxProps = {
  isChecked: boolean;
};

// Colors
const borderColor = '#b0c4de';
const hoverBgColor = '#b0c4de4d';
const checkedBgColor = '#b0c4de66';

// Components
const StBox = styled.div<BoxProps>`
  ${({ isChecked }) =>
    isChecked &&
    css`
      background-color: ${checkedBgColor};
    `}

  display: flex;
  justify-content: space-between;
  align-items: stretch;
  border-radius: 99px;
  border: solid 1px ${borderColor};
  text-align: center;
  padding: 4px 12px 4px 8px;
  width: 90px;

  &:hover {
    cursor: pointer;
    background-color: ${hoverBgColor};
  }
`;

const StCheckBox = styled.input.attrs({ type: 'checkbox' })`
  background-color: red;
  &:hover {
    cursor: pointer;
  }
`;

const StLabel = styled.label`
  width: fit-content;
`;

// Props
type Props = Prefecture & {
  handleOnChange: (prefCode: number, prefName: string, isChecked: boolean) => void;
};

// Component
export const CheckBox: FC<Props> = ({ prefCode, prefName, handleOnChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <StLabel htmlFor={`checkbox-${prefName}`}>
      <StBox isChecked={isChecked}>
        <StCheckBox
          name='Prefecture name'
          id={`checkbox-${prefName}`}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            handleOnChange(prefCode, prefName, e.target.checked);
            setIsChecked(e.target.checked);
          }}
        />
        <span>{prefName}</span>
      </StBox>
    </StLabel>
  );
};
