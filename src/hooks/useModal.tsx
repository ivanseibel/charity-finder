import React, { createContext, useCallback, useContext, useState } from 'react';

interface ModalContextData {
  modal: boolean;
  handleModal(content?: React.ReactNode): void;
  modalContent: JSX.Element;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const dataInitialState = {
  modal: false,
  modalContent: <></>,
};

interface IModalState {
  modal: boolean;
  modalContent: JSX.Element;
}

const ModalProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IModalState>(
    dataInitialState as IModalState,
  );

  const handleModal = useCallback(
    (content = null) => {
      setData({
        modal: !data.modal,
        modalContent: content,
      });
    },
    [data.modal],
  );

  return (
    <ModalContext.Provider
      value={{
        modal: data.modal,
        handleModal,
        modalContent: data.modalContent,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const useModal = (): ModalContextData => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within an ModalProvider');
  }

  return context;
};

export { useModal, ModalProvider };
