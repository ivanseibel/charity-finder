import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Modal from './components/Modal';
import AppProvider from './hooks/index';

import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Router>
      <AppProvider>
        <Modal />
        <Routes />
      </AppProvider>
    </Router>
  </>
);

export default App;
