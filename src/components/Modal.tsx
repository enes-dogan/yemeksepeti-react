import { useRef } from 'react';
import { createPortal } from 'react-dom';

import { ModalProps } from '../types';

function Modal({ children }: ModalProps) {
  const dialog = useRef<HTMLDialogElement>(null);

  function handleOpen() {
    dialog.current!.show();
  }

  function handleClose() {
    dialog.current!.close();
  }

  setTimeout(handleOpen, 5000);

  return (
    <>
      {createPortal(
        <dialog className="modal cart" ref={dialog}>
          {children}
          <button onClick={handleClose}>Close</button>
        </dialog>,
        document.getElementById('modal')!
      )}
    </>
  );
}

export default Modal;
