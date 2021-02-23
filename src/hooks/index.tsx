import React from 'react';
import { AuthProvider } from './useAuth';
import { SearchProvider } from './useSearch';
import { ModalProvider } from './useModal';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <SearchProvider>
        <ModalProvider>{children}</ModalProvider>
      </SearchProvider>
    </AuthProvider>
  );
};

export default AppProvider;
