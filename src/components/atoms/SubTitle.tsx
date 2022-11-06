import { FC } from 'react';
import styled from 'styled-components';
import { device, size } from '../../theme/settings/breakpoint';
import { titleColor } from '../../theme/settings/color';

/* Component style */
export const StH2 = styled.h2<{ ml: string }>`
  width: 100%;
  max-width: ${size.sm};
  text-align: left;
  color: ${titleColor};
  margin-left: ${({ ml }) => ml};

  span {
    padding: 0.5rem 0rem;
    margin-bottom: 0.2rem;
    border-bottom: 3px solid #70c6f5;
  }

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
  ml: string;
};

// Component
export const SubTitle: FC<SubTitleProps> = ({ subTitle, ml }) => (
  <StH2 ml={ml}>
    <span>{subTitle}</span>
  </StH2>
);
