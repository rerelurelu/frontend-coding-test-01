import { atom } from 'recoil';
import { PopulationData } from '../../type/types';
import { initialPrefData } from '../../utils/initialPopulationData';

export const populationDataState = atom<PopulationData[]>({
  key: 'populationDataState',
  default: [initialPrefData],
});
