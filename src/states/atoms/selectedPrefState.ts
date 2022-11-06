import { atom } from 'recoil';
import { Prefecture } from '../../type/types';

// 一番最後に選択された都道府県を管理
export const selectedPrefState = atom<Prefecture | null>({
  key: 'selectedPrefState',
  default: null,
});
