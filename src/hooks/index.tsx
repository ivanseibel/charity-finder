import React from 'react';
import { AuthProvider } from './useAuth';
import { ModalProvider } from './useModal';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ModalProvider>{children}</ModalProvider>
    </AuthProvider>
  );
};

export default AppProvider;
