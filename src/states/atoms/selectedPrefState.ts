import { atom } from 'recoil';
import { Prefecture } from '../../type/types';

export const selectedPrefState = atom<Prefecture | null>({
  key: 'selectedPrefState',
  default: null,
});
