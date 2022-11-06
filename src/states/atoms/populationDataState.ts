import { atom } from 'recoil';
import { PopulationData } from '../../type/types';
import { initialPrefData } from '../../utils/initialPopulationData';

// データがグラフに描画されている都道府県を管理
export const populationDataState = atom<PopulationData[]>({
  key: 'populationDataState',
  default: [initialPrefData],
});
