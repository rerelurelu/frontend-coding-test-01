import { atom } from 'recoil';
import { Prefecture } from '../../type/types';

// 選択されているすべての都道府県を管理
export const checkedPrefsState = atom<Prefecture[]>({
  key: 'checkedPrefsState',
  default: [],
});
