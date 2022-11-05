import { atom } from 'recoil';
import { Prefecture } from '../../type/types';

export const checkedPrefsState = atom<Prefecture[]>({
  key: 'checkedPrefsState',
  default: [],
});
