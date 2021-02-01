import React from 'react';
import ReactDOM from 'react-dom';
import * as SC from './styles';
import { useModal } from '../../hooks/useModal';

const Modal: React.FC = () => {
  const modalRoot = document.querySelector('#modal-root');
  const { handleModal, modal, modalContent } = useModal();

  if (modalRoot && modal) {
    return ReactDOM.createPortal(
      <SC.Container>
        <div style={{ background: 'rgba(0, 0, 0, 0.2)' }}>
          <div>
            <button type="button" onClick={() => handleModal()}>
              &times;
            </button>
            {modalContent}
          </div>
        </div>
      </SC.Container>,
      modalRoot,
    );
  }
  return null;
};

export default Modal;
