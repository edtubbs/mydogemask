import { useCallback, useState } from 'react';

import { AppProvider } from '../../components/AppProvider';
import { CreateWallet } from './components/CreateWallet';
import { HomeWrapper } from './components/HomeWrapper';
import { Intro } from './components/Intro';

const screens = {
  intro: Intro,
  createWallet: CreateWallet,
};

function App() {
  const [currentScreen, setCurrentScreen] = useState('intro');
  const RenderScreen = screens[currentScreen] ?? null;

  const setScreen = useCallback((id) => setCurrentScreen(id), []);

  return (
    <AppProvider>
      <HomeWrapper>
        <RenderScreen setScreen={setScreen} />
      </HomeWrapper>
    </AppProvider>
  );
}

export default App;
