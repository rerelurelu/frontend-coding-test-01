import { Prefecture, ResponseData } from '../type/types';

export type CreateLabelsTestData = {
  data1: { outputYears: number[] };
};

export type CreatePopulationTestData = {
  data1: {
    inputData: { res: ResponseData; selectedPref: Prefecture };
    outputData: {
      id: number;
      label: string;
      data: number[];
      borderColor: string;
    };
  };
  data2: {
    inputData: { res: ResponseData; selectedPref: Prefecture };
    outputData: {
      id: number;
      label: string;
      data: number[];
      borderColor: string;
    };
  };
  data3: {
    inputData: { res: ResponseData; selectedPref: Prefecture };
    outputData: {
      id: number;
      label: string;
      data: number[];
      borderColor: string;
    };
  };
  data4: {
    inputData: { res: ResponseData; selectedPref: Prefecture };
    outputData: {
      id: number;
      label: string;
      data: number[];
      borderColor: string;
    };
  };
  data5: {
    inputData: { res: ResponseData; selectedPref: Prefecture };
    outputData: {
      id: number;
      label: string;
      data: number[];
      borderColor: string;
    };
  };
  data6: {
    inputData: { res: ResponseData; selectedPref: Prefecture };
    outputData: {
      id: number;
      label: string;
      data: number[];
      borderColor: string;
    };
  };
};
