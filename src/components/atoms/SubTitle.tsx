import { FC } from 'react';
import styled from 'styled-components';
import { device, size } from '../../theme/settings/breakpoint';

/* Component style */
const StH2 = styled.h2`
  width: 100%;
  max-width: ${size.sm};
  text-align: left;

  @media ${device.tablet} {
    max-width: ${size.md};
  }

  @media ${device.laptop} {
    max-width: ${size.lg};
  }
`;

// Props
type SubTitleProps = {
  subTitle: string;
};

// Component
export const SubTitle: FC<SubTitleProps> = ({ subTitle }) => <StH2>{subTitle}</StH2>;
