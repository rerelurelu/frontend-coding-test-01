/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { AxiosResponse } from 'axios';
import { PopulationData, Prefecture } from '../type/types';
import { chartColors } from './chartColors';

export const createPopulationData = (
  res: AxiosResponse,
  selectedPref: Prefecture
): PopulationData => {
  const data: number[] = [];
  const fullData: { year: number; value: number }[] = res.data.result.data[0].data;
  const year = new Date().getFullYear();
  const yearData = fullData.filter((ele) => ele.year <= year);
  yearData.map((ele) => data.push(ele.value));
  const borderColor = chartColors[selectedPref.prefCode % 6];
  return {
    id: selectedPref.prefCode,
    label: selectedPref.prefName,
    data,
    borderColor,
  };
};
