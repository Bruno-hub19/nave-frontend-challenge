import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import { Routes } from './routes';
import { ContextsProviders } from './hooks';

const App: React.FC = () => {
  return (
    <>
      <ContextsProviders>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ContextsProviders>

      <GlobalStyles />
    </>
  );
};

export default App;
