import { atom } from 'recoil';
import { Prefecture } from '../../type/types';

// チェックが外された都道府県を管理
export const uncheckedPrefState = atom<Prefecture | null>({
  key: 'uncheckedPrefState',
  default: null,
});
