import { FC } from 'react';
import { Header } from '../components/organisms/Header';
import { PopulationGraphField } from '../components/organisms/PopulationGraphField';
import { PrefSelectField } from '../components/organisms/PrefSelectField';

// Component
export const Home: FC = () => {
  return (
    <>
      <Header />
      <PrefSelectField />
      <PopulationGraphField />
    </>
  );
};
