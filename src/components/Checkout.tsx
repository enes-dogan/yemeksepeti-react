import { useRef, useContext, useEffect } from 'react';
import CartContext from '../store/CartContext.tsx';

import { currencyFormatter } from '../util/formatting.ts';
import { ModalRef, CheckoutProps } from '../types.ts';

import Modal from './UI/Modal.tsx';
import Input from './UI/Input.tsx';
import Button from './UI/Button.tsx';

function Checkout({ cartStatus, onCartStatusChange }: CheckoutProps) {
  const { items } = useContext(CartContext);
  const dialog = useRef<ModalRef>(null);

  const cartTotalPrice = items.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.quantity!,
    0
  );

  useEffect(() => {
    if (cartStatus === 'CHECKOUT') dialog.current!.open();
    if (cartStatus === 'CLOSE') dialog.current!.close();
  }, [cartStatus]);

  function handleCloseModal() {
    onCartStatusChange('CLOSE');
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const fd = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(fd.entries());

    console.log(data);

    event.currentTarget.reset();
    onCartStatusChange('SUBMIT');
  }

  return (
    <Modal ref={dialog}>
      {cartStatus === 'SUBMIT' ? (
        <>
          {' '}
          <h2>Success!</h2>
          <p>Your order was submitted successfully.</p>
          <p>
            We will get back to you with more details via email within the next
            few minutes.
          </p>
          <p className="modal-actions">
            <Button text="Okay" onClick={() => onCartStatusChange('CLOSE')} />
          </p>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Checkout</h2>
          <p>Total Amount: {currencyFormatter.format(cartTotalPrice)}</p>
          <Input label="Full Name" id="name" name="name" />
          <Input label="E-Mail Address" id="email" type="email" name="email" />
          <Input label="Street" id="street" name="street" />
          <div className="control-row">
            <Input label="Postal Code" id="postal-code" name="postal-code" />
            <Input label="City" id="city" name="city" />
          </div>
          <p className="modal-actions">
            <Button
              text="Close"
              type="reset"
              style="text-button"
              onClick={handleCloseModal}
            />
            <Button text="Submit Order" type="submit" />
          </p>
        </form>
      )}
    </Modal>
  );
}

export default Checkout;
