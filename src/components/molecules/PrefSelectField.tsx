import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { PrefResponse } from '../../type/types';
import { CheckBox } from '../atoms/CheckBox';
import styled from 'styled-components';
import { device, size } from '../../theme/settings/breakpoint';
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

// API
const END_POINT = 'https://opendata.resas-portal.go.jp/';
const RESAS_API_KEY = import.meta.env.VITE_RESAS_API_KEY;

// Component
export const PrefSelectField: FC = () => {
  const [prefectures, setPreFectures] = useState<PrefResponse | null>(null);

  // 都道府県名の一覧データを取得
  useEffect(() => {
    axios
      .get(`${END_POINT}api/v1/prefectures`, {
        headers: { 'X-API-KEY': RESAS_API_KEY },
      })
      .then((res) => {
        setPreFectures(res.data);
      })
      .catch((err) => {
        // TODO: エラー時の処理を追加
        alert(err.message);
      });
  }, []);

  // 都道府県選択時の処理
  const handleOnChange = (predCode: number, prefName: string) => {
    // TODO: グラフの描画に必要な情報を扱う処理を追加
  };

  return (
    <Container>
      <SubTitle subTitle={'都道府県'} />
      <Box>
        {prefectures?.result.map((pref) => (
          <CheckBox
            key={pref.prefCode}
            prefCode={pref.prefCode}
            prefName={pref.prefName}
            handleOnChange={handleOnChange}
          />
        ))}
      </Box>
    </Container>
  );
};
