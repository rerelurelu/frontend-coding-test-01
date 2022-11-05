import { atom } from 'recoil';
import { Prefecture } from '../../type/types';

export const uncheckedPrefState = atom<Prefecture | null>({
  key: 'uncheckedPrefState',
  default: null,
});
