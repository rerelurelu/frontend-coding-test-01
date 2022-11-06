import { Devices, Sizes } from '../../type/themeTypes';

export const size: Sizes = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
};

export const device: Devices = {
  mobile: `(${size.sm} <= width)`,
  tablet: `(${size.md} <= width)`,
  laptop: `(${size.lg} <= width)`,
};
