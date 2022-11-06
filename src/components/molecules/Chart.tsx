import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { FC, useEffect, useReducer } from 'react';
import { Line } from 'react-chartjs-2';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { END_POINT, RESAS_API_KEY } from '../../api/resas';
import { fetchReducer, INITIAL_STATE } from '../../reducer/fetchReducer';
import { populationDataState } from '../../states/atoms/populationDataState';
import { selectedPrefState } from '../../states/atoms/selectedPrefState';
import { uncheckedPrefState } from '../../states/atoms/uncheckedPrefState';
import { device, size } from '../../theme/settings/breakpoint';
import { FetchActionKind } from '../../type/types';
import { createLabels } from '../../utils/createLabels';
import { createPopulationData } from '../../utils/createPopulationData';
import { ErrorText } from '../atoms/ErrorText';

/* Component style */
const Box = styled.div`
  padding: 4px 4px 250px;
  width: 100vw;
  height: 450px;
  max-width: ${size.sm};
  margin-top: 2rem;

  @media ${device.tablet} {
    max-width: ${size.md};
  }

  @media ${device.laptop} {
    max-width: ${size.lg};
  }
`;

/* ChartJS setting */
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        boxHeight: 0,
      },
    },
    title: {
      display: true,
      text: '都道府県別人口推移グラフ',
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        align: 'end',
        text: '年度',
      },
    },
    y: {
      title: {
        display: true,
        align: 'end',
        text: '人口数',
      },
    },
  },
};

const labels: number[] = createLabels();

/* Component */
export const Chart: FC = () => {
  const [datasets, setDatasets] = useRecoilState(populationDataState);
  const selectedPref = useRecoilValue(selectedPrefState);
  const uncheckedPref = useRecoilValue(uncheckedPrefState);
  const [state, dispatch] = useReducer(fetchReducer, INITIAL_STATE);

  useEffect(() => {
    dispatch({ type: FetchActionKind.FETCH_START });

    if (selectedPref !== null) {
      axios
        .get(
          `${END_POINT}api/v1/population/composition/perYear?prefCode=${selectedPref.prefCode}`,
          {
            headers: { 'X-API-KEY': RESAS_API_KEY },
          }
        )
        .then((res) => {
          const data = createPopulationData(res, selectedPref);
          setDatasets([...datasets, data]);
          dispatch({ type: FetchActionKind.FETCH_SUCCESS });
        })
        .catch(() => {
          dispatch({ type: FetchActionKind.FETCH_ERROR });
        });
    } else if (uncheckedPref !== null) {
      setDatasets(datasets.filter((ele) => ele.id !== uncheckedPref.prefCode));
    }
  }, [selectedPref, uncheckedPref]);

  return (
    <>
      {state.isError && <ErrorText text='人口推移データの取得に失敗しました😢' />}
      <Box>
        <Line options={options} data={{ labels, datasets }} />
      </Box>
    </>
  );
};
