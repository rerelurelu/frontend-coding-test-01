export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export type PrefResponse = {
  message: null;
  result: Prefecture[];
};
