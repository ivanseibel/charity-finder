import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Modal from './components/Modal';
import { ModalProvider } from './hooks/useModal';

import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Router>
      <ModalProvider>
        <Modal />
        <Routes />
      </ModalProvider>
    </Router>
  </>
);

export default App;
