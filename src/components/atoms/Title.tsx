import { FC } from 'react';
import styled from 'styled-components';
import { titleColor } from '../../theme/settings/color';

/* Component style */
const StH1 = styled.h1`
  text-align: center;
  color: ${titleColor};
`;

/* Props */
type Props = {
  title: string;
};

/* Component */
export const Title: FC<Props> = ({ title }) => {
  return <StH1>{title}</StH1>;
};
