import { FC } from 'react';
import { RecoilRoot } from 'recoil';
import { Home } from './pages/Home';

/* Component */
export const App: FC = () => {
  return (
    <RecoilRoot>
      <Home />
    </RecoilRoot>
  );
};
