import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalProps } from '../../types.ts';

function Modal({ children, cssClasses = '', open }: ModalProps) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modal = dialog.current!;
    if (open) {
      modal.showModal();
    } else {
      modal.close();
    }
  }, [open]);

  return (
    <>
      {createPortal(
        <dialog className={`modal ${cssClasses}`} ref={dialog}>
          {children}
        </dialog>,
        document.getElementById('modal')!
      )}
    </>
  );
}

export default Modal;
