import { PopulationData, Prefecture, ResponseData } from '../type/types';
import { chartColors } from './chartColors';

export const createPopulationData = (
  res: ResponseData,
  selectedPref: Prefecture
): PopulationData => {
  const data: number[] = [];
  const fullData: { year: number; value: number }[] = res.data.result.data[0].data;
  const year = new Date().getFullYear();
  const yearData = fullData.filter((ele) => ele.year >= 1980 && ele.year <= year);
  yearData.map((ele) => data.push(ele.value));
  const borderColor = chartColors[selectedPref.prefCode % 6];
  return {
    id: selectedPref.prefCode,
    label: selectedPref.prefName,
    data,
    borderColor,
  };
};
