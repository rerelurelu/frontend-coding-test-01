import { ChangeEvent, FC, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled, { css } from 'styled-components';
import { checkedPrefsState } from '../../states/atoms/checkedPrefsState';
import { selectedPrefState } from '../../states/atoms/selectedPrefState';
import { uncheckedPrefState } from '../../states/atoms/uncheckedPrefState';
import { borderColor, checkedBgColor, hoverBgColor, textColor } from '../../theme/settings/color';
import { Prefecture } from '../../type/types';

/* Component style */
// Props
type BoxProps = {
  isChecked: boolean;
};

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
  padding: 4px 8px;
  width: 100px;

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

const StSpan = styled.span`
  color: ${textColor};
`;

// Component
export const CheckBox: FC<Prefecture> = ({ prefCode, prefName }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [checkedPrefs, setCheckedPrefs] = useRecoilState(checkedPrefsState);
  const [, setSelectedPref] = useRecoilState(selectedPrefState);
  const [, setUncheckedPref] = useRecoilState(uncheckedPrefState);

  const handleOnChange = (checked: boolean) => {
    setIsChecked(checked);
    setSelectedPref({ prefCode, prefName });

    if (checked) {
      setCheckedPrefs([...checkedPrefs, { prefCode, prefName }]);
      setUncheckedPref(null);
    } else {
      setCheckedPrefs(checkedPrefs.filter((pref: Prefecture) => pref.prefCode !== prefCode));
      setUncheckedPref({ prefCode, prefName });
      setSelectedPref(null);
    }
  };

  return (
    <StLabel htmlFor={`checkbox-${prefName}`}>
      <StBox isChecked={isChecked}>
        <StCheckBox
          name='Prefecture name'
          id={`checkbox-${prefName}`}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            handleOnChange(e.target.checked);
          }}
        />
        <StSpan>{prefName}</StSpan>
      </StBox>
    </StLabel>
  );
};
