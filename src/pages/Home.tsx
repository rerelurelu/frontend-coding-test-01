import { FC } from 'react';
import { PopulationGraphField } from '../components/organisms/PopulationGraphField';
import { PrefSelectField } from '../components/organisms/PrefSelectField';

// Component
export const Home: FC = () => {
  return (
    <>
      <PrefSelectField />
      <PopulationGraphField />
    </>
  );
};
