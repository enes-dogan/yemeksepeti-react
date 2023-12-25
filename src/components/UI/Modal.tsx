import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

import { ModalProps } from '../../types';

const Modal = forwardRef(function ({ children, cssClasses }: ModalProps, ref) {
  const classes = `${cssClasses ? cssClasses : ''} modal`;
  const internalRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    modal: internalRef.current,

    open: () => {
      internalRef.current!.showModal();
    },
    close: () => {
      internalRef.current!.close();
    },
  }));

  return (
    <>
      {createPortal(
        <dialog className={classes} ref={internalRef}>
          {children}
        </dialog>,
        document.getElementById('modal')!
      )}
    </>
  );
});

export default Modal;
