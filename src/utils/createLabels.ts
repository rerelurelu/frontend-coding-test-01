// グラフの年度ラベル用データ生成
export const createLabels = (): number[] => {
  const year: number = new Date().getFullYear();
  const counter: number = Math.floor(year / 5) - 1980 / 5 + 1;
  const labels: number[] = [...Array<undefined>(counter)].map((_, i) => 1980 + 5 * i);
  return labels;
};
