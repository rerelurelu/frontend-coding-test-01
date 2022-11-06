import { FC } from 'react';
import { RecoilRoot } from 'recoil';
import { Home } from './pages/Home';

export const App: FC = () => {
  return (
    <RecoilRoot>
      <Home />
    </RecoilRoot>
  );
};
