export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export type PrefResponse = {
  message: null;
  result: Prefecture[];
};

export type PopulationData = {
  id: number;
  label: string;
  data: number[];
  borderColor: string;
};

export enum FetchActionKind {
  FETCH_START = 'FETCH_START',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_ERROR = 'FETCH_ERROR',
}

export type FetchAction = {
  type: FetchActionKind;
};

export type FetchState = {
  isLoading: boolean;
  isError: boolean;
};

export type ResponseData = {
  data: {
    result: {
      data: [
        {
          data: [
            { year: number; value: number },
            { year: number; value: number },
            { year: number; value: number },
            { year: number; value: number },
            { year: number; value: number },
            { year: number; value: number },
            { year: number; value: number },
            { year: number; value: number },
            { year: number; value: number },
            { year: number; value: number },
            { year: number; value: number }
          ];
        }
      ];
    };
  };
};
