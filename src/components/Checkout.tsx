import { useRef } from 'react';
import { ModalRef, CheckoutProps } from '../types.ts';

import Modal from './Modal.tsx';
import Input from './UI/Input.tsx';

function Checkout({ goCheckout, onToggleCheckout }: CheckoutProps) {
  const dialog = useRef<ModalRef>(null);

  if (goCheckout) {
    dialog.current!.open();
    onToggleCheckout();
  }

  function handleCloseModal() {
    dialog.current!.close();
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fd = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(fd.entries());
    console.log(data);
    event.currentTarget.reset();
    handleCloseModal();
  }

  return (
    <Modal ref={dialog}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: $7.99</p>
        <Input label="Full Name" id="name" name="name" />
        <Input label="E-Mail Address" id="email" type="email" name="email" />
        <Input label="Street" id="street" name="street" />
        <div className="control-row">
          <Input label="Postal Code" id="postal-code" name="postal-code" />
          <Input label="City" id="city" name="city" />
        </div>
        <p className="modal-actions">
          <button className="text-button undefined" onClick={handleCloseModal}>
            Close
          </button>
          <button className="button undefined">Submit Order</button>
        </p>
      </form>
    </Modal>
  );
}

export default Checkout;
