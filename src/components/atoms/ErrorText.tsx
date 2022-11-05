import { FC } from 'react';
import styled from 'styled-components';

/* Component style */
const StErrorText = styled.p`
  font-size: 1.5rem;
  color: red;
  text-align: center;
`;

/* Props */
type Props = {
  text: string;
};

export const ErrorText: FC<Props> = ({ text }) => {
  return <StErrorText>{text}</StErrorText>;
};
