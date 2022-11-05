import axios, { AxiosResponse } from 'axios';
import { FC, useLayoutEffect, useState, useReducer } from 'react';
import styled from 'styled-components';
import { END_POINT, RESAS_API_KEY } from '../../api/resas';
import { fetchReducer, INITIAL_STATE } from '../../reducer/fetchReducer';
import { device, size } from '../../theme/settings/breakpoint';
import { PrefResponse, FetchActionKind } from '../../type/types';
import { CheckBox } from '../atoms/CheckBox';
import { ErrorText } from '../atoms/ErrorText';
import { Spinner } from '../atoms/Spinner';
import { SubTitle } from '../atoms/SubTitle';

/* Component style */
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 0.5rem;
  row-gap: 1rem;
  padding: 4px;
  max-width: ${size.sm};

  @media ${device.tablet} {
    grid-template-columns: repeat(5, 1fr);
    column-gap: 2rem;
    row-gap: 1rem;
    max-width: ${size.md};
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(7, 1fr);
    column-gap: 2.5rem;
    row-gap: 1.5rem;
    max-width: ${size.lg};
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: ${size.sm};
  height: 300px;

  @media ${device.tablet} {
    width: ${size.md};
  }

  @media ${device.laptop} {
    width: ${size.lg};
  }
`;

/* Component */
export const PrefSelectField: FC = () => {
  const [prefectures, setPreFectures] = useState<PrefResponse | null>(null);
  const [state, dispatch] = useReducer(fetchReducer, INITIAL_STATE);

  // 都道府県名の一覧データを取得
  useLayoutEffect(() => {
    dispatch({ type: FetchActionKind.FETCH_START });

    axios
      .get(`${END_POINT}api/v1/prefectures`, {
        headers: { 'X-API-KEY': RESAS_API_KEY },
      })
      .then((res: AxiosResponse) => {
        // エラー発生時、ステータスコード200で返されるデータの中に
        // エラー原因のステータスコードとエラーメッセージが返されるので
        // エラー発生時の処理もこちらに記述
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (res.data.statusCode) {
          dispatch({ type: FetchActionKind.FETCH_ERROR });
        } else {
          setPreFectures(res.data);
          dispatch({ type: FetchActionKind.FETCH_SUCCESS });
        }
      })
      .catch(() => {
        dispatch({ type: FetchActionKind.FETCH_ERROR });
      });
  }, []);

  return (
    <Container>
      <SubTitle subTitle='都道府県' />
      {state.isError && <ErrorText text='都道府県データの取得に失敗しました😢' />}
      <Box>
        {state.isLoading && (
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        )}
        {prefectures &&
          prefectures.result.map((pref) => (
            <CheckBox key={pref.prefCode} prefCode={pref.prefCode} prefName={pref.prefName} />
          ))}
      </Box>
    </Container>
  );
};
