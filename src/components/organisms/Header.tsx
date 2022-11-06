import { FC } from 'react';
import styled from 'styled-components';

/* Component style */
const StHeader = styled.header`
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #778899;
`;

const StTitle = styled.h1`
  text-align: center;
  color: #222222;
`;

/* Component */
export const Header: FC = () => {
  return (
    <StHeader>
      <StTitle>人口推移グラフ</StTitle>
    </StHeader>
  );
};
