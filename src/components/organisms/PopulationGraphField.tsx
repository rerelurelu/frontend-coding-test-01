import { FC } from 'react';
import styled from 'styled-components';
import { device, size } from '../../theme/settings/breakpoint';
import { SubTitle } from '../atoms/SubTitle';
import { Chart } from '../molecules/Chart';

/* Component style */
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 6rem;
`;

const Box = styled.div`
  padding: 4px;
  width: 100%;
  max-width: ${size.sm};

  @media ${device.tablet} {
    grid-template-columns: repeat(5, 1fr);
    column-gap: 2rem;
    row-gap: 1rem;
    max-width: ${size.md};
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(7, 1fr);
    column-gap: 2.5rem;
    row-gap: 1.5rem;
    max-width: ${size.lg};
  }
`;

/* Component */
export const PopulationGraphField: FC = () => {
  return (
    <Container>
      <Box>
        <SubTitle subTitle='人口推移グラフ' ml='0.5rem' />
        <Chart />
      </Box>
    </Container>
  );
};
