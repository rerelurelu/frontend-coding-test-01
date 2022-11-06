import { CreateLabelsTestData, CreatePopulationTestData } from './types';

/* 人口データ取得時の入力年数用データ */
export const createLabelsTestData: CreateLabelsTestData = {
  data1: {
    outputYears: [1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020],
  },
};

/* グラフ描画用の人口データ加工処理用データ */
export const createPopulationTestData: CreatePopulationTestData = {
  // 「prefCode = 1」のデータ
  data1: {
    inputData: {
      res: {
        data: {
          result: {
            data: [
              {
                data: [
                  { year: 1975, value: 55631975 },
                  { year: 1980, value: 55631980 },
                  { year: 1985, value: 55631985 },
                  { year: 1990, value: 55631990 },
                  { year: 1995, value: 55631995 },
                  { year: 2000, value: 55632000 },
                  { year: 2005, value: 55632005 },
                  { year: 2010, value: 55632010 },
                  { year: 2015, value: 55632015 },
                  { year: 2020, value: 55632020 },
                  { year: 2025, value: 55632025 },
                ],
              },
            ],
          },
        },
      },
      selectedPref: {
        prefCode: 1,
        prefName: '長野県',
      },
    },
    outputData: {
      id: 1,
      label: '長野県',
      data: [
        55631980, 55631985, 55631990, 55631995, 55632000, 55632005, 55632010, 55632015, 55632020,
      ],
      borderColor: '#005AFF',
    },
  },

  // 「prefCode = 2」のデータ
  data2: {
    inputData: {
      res: {
        data: {
          result: {
            data: [
              {
                data: [
                  { year: 1975, value: 55631975 },
                  { year: 1980, value: 55631980 },
                  { year: 1985, value: 55631985 },
                  { year: 1990, value: 55631990 },
                  { year: 1995, value: 55631995 },
                  { year: 2000, value: 55632000 },
                  { year: 2005, value: 55632005 },
                  { year: 2010, value: 55632010 },
                  { year: 2015, value: 55632015 },
                  { year: 2020, value: 55632020 },
                  { year: 2025, value: 55632025 },
                ],
              },
            ],
          },
        },
      },
      selectedPref: {
        prefCode: 2,
        prefName: '愛知県',
      },
    },
    outputData: {
      id: 2,
      label: '愛知県',
      data: [
        55631980, 55631985, 55631990, 55631995, 55632000, 55632005, 55632010, 55632015, 55632020,
      ],
      borderColor: '#03AF7A',
    },
  },

  // 「prefCode = 3」のデータ
  data3: {
    inputData: {
      res: {
        data: {
          result: {
            data: [
              {
                data: [
                  { year: 1975, value: 55631975 },
                  { year: 1980, value: 55631980 },
                  { year: 1985, value: 55631985 },
                  { year: 1990, value: 55631990 },
                  { year: 1995, value: 55631995 },
                  { year: 2000, value: 55632000 },
                  { year: 2005, value: 55632005 },
                  { year: 2010, value: 55632010 },
                  { year: 2015, value: 55632015 },
                  { year: 2020, value: 55632020 },
                  { year: 2025, value: 55632025 },
                ],
              },
            ],
          },
        },
      },
      selectedPref: {
        prefCode: 3,
        prefName: '滋賀県',
      },
    },
    outputData: {
      id: 3,
      label: '滋賀県',
      data: [
        55631980, 55631985, 55631990, 55631995, 55632000, 55632005, 55632010, 55632015, 55632020,
      ],
      borderColor: '#4DC4FF',
    },
  },

  // 「prefCode = 4」のデータ
  data4: {
    inputData: {
      res: {
        data: {
          result: {
            data: [
              {
                data: [
                  { year: 1975, value: 55631975 },
                  { year: 1980, value: 55631980 },
                  { year: 1985, value: 55631985 },
                  { year: 1990, value: 55631990 },
                  { year: 1995, value: 55631995 },
                  { year: 2000, value: 55632000 },
                  { year: 2005, value: 55632005 },
                  { year: 2010, value: 55632010 },
                  { year: 2015, value: 55632015 },
                  { year: 2020, value: 55632020 },
                  { year: 2025, value: 55632025 },
                ],
              },
            ],
          },
        },
      },
      selectedPref: {
        prefCode: 4,
        prefName: '和歌山県',
      },
    },
    outputData: {
      id: 4,
      label: '和歌山県',
      data: [
        55631980, 55631985, 55631990, 55631995, 55632000, 55632005, 55632010, 55632015, 55632020,
      ],
      borderColor: '#F6AA00',
    },
  },

  // 「prefCode = 5」のデータ
  data5: {
    inputData: {
      res: {
        data: {
          result: {
            data: [
              {
                data: [
                  { year: 1975, value: 55631975 },
                  { year: 1980, value: 55631980 },
                  { year: 1985, value: 55631985 },
                  { year: 1990, value: 55631990 },
                  { year: 1995, value: 55631995 },
                  { year: 2000, value: 55632000 },
                  { year: 2005, value: 55632005 },
                  { year: 2010, value: 55632010 },
                  { year: 2015, value: 55632015 },
                  { year: 2020, value: 55632020 },
                  { year: 2025, value: 55632025 },
                ],
              },
            ],
          },
        },
      },
      selectedPref: {
        prefCode: 5,
        prefName: '北海道',
      },
    },
    outputData: {
      id: 5,
      label: '北海道',
      data: [
        55631980, 55631985, 55631990, 55631995, 55632000, 55632005, 55632010, 55632015, 55632020,
      ],
      borderColor: '#990099',
    },
  },

  // 「prefCode = 6」のデータ
  data6: {
    inputData: {
      res: {
        data: {
          result: {
            data: [
              {
                data: [
                  { year: 1975, value: 55631975 },
                  { year: 1980, value: 55631980 },
                  { year: 1985, value: 55631985 },
                  { year: 1990, value: 55631990 },
                  { year: 1995, value: 55631995 },
                  { year: 2000, value: 55632000 },
                  { year: 2005, value: 55632005 },
                  { year: 2010, value: 55632010 },
                  { year: 2015, value: 55632015 },
                  { year: 2020, value: 55632020 },
                  { year: 2025, value: 55632025 },
                ],
              },
            ],
          },
        },
      },
      selectedPref: {
        prefCode: 6,
        prefName: '京都府',
      },
    },
    outputData: {
      id: 6,
      label: '京都府',
      data: [
        55631980, 55631985, 55631990, 55631995, 55632000, 55632005, 55632010, 55632015, 55632020,
      ],
      borderColor: '#FF4B00',
    },
  },
};
