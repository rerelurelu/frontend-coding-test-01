import { createLabels } from '../../utils/createLabels';
import { createLabelsTestData } from '../TestData';
import { CreateLabelsTestData } from '../types';

describe('グラフ描画用の年数ラベルデータのテスト', () => {
  const testData: CreateLabelsTestData = createLabelsTestData;

  test('「2022」年の場合', () => {
    expect(createLabels()).toEqual(testData.data1.outputYears);
  });
});
