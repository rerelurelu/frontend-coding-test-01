import { createPopulationData } from '../../utils/createPopulationData';
import { createPopulationTestData } from '../TestData';
import { CreatePopulationTestData } from '../types';

describe('グラフ描画用の人口データ加工処理のテスト', () => {
  const testData: CreatePopulationTestData = createPopulationTestData;

  test('prefCode=1 の場合', () => {
    expect(
      createPopulationData(testData.data1.inputData.res, testData.data1.inputData.selectedPref)
    ).toEqual({
      id: testData.data1.outputData.id,
      label: testData.data1.outputData.label,
      data: testData.data1.outputData.data,
      borderColor: testData.data1.outputData.borderColor,
    });
  });

  test('prefCode=2 の場合', () => {
    expect(
      createPopulationData(testData.data2.inputData.res, testData.data2.inputData.selectedPref)
    ).toEqual({
      id: testData.data2.outputData.id,
      label: testData.data2.outputData.label,
      data: testData.data2.outputData.data,
      borderColor: testData.data2.outputData.borderColor,
    });
  });

  test('prefCode=3 の場合', () => {
    expect(
      createPopulationData(testData.data3.inputData.res, testData.data3.inputData.selectedPref)
    ).toEqual({
      id: testData.data3.outputData.id,
      label: testData.data3.outputData.label,
      data: testData.data3.outputData.data,
      borderColor: testData.data3.outputData.borderColor,
    });
  });

  test('prefCode=4 の場合', () => {
    expect(
      createPopulationData(testData.data4.inputData.res, testData.data4.inputData.selectedPref)
    ).toEqual({
      id: testData.data4.outputData.id,
      label: testData.data4.outputData.label,
      data: testData.data4.outputData.data,
      borderColor: testData.data4.outputData.borderColor,
    });
  });

  test('prefCode=5 の場合', () => {
    expect(
      createPopulationData(testData.data5.inputData.res, testData.data5.inputData.selectedPref)
    ).toEqual({
      id: testData.data5.outputData.id,
      label: testData.data5.outputData.label,
      data: testData.data5.outputData.data,
      borderColor: testData.data5.outputData.borderColor,
    });
  });

  test('prefCode=6 の場合', () => {
    expect(
      createPopulationData(testData.data6.inputData.res, testData.data6.inputData.selectedPref)
    ).toEqual({
      id: testData.data6.outputData.id,
      label: testData.data6.outputData.label,
      data: testData.data6.outputData.data,
      borderColor: testData.data6.outputData.borderColor,
    });
  });
});
