import { useContext } from 'react';
import CartContext from '../store/CartContext.tsx';
import UserProgressContext from '../store/UserProgressContext.tsx';

import { currencyFormatter } from '../util/formatting.ts';

import Modal from './UI/Modal.tsx';
import Input from './UI/Input.tsx';
import Button from './UI/Button.tsx';

function Checkout() {
  const { items, removeItem } = useContext(CartContext);
  const { cartStatus, onCartStatusChange } = useContext(UserProgressContext);

  const cartTotalPrice = items.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.quantity!,
    0
  );

  function handleCloseModal() {
    onCartStatusChange('CLOSE');
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const fd = new FormData(event.target as HTMLFormElement);
    const customer = Object.fromEntries(fd.entries());

    const order = { ...items, customer, id: Math.random() * 100 };

    console.log(order);

    items.forEach(item => {
      for (let i = 0; i < item.quantity!; i++) {
        removeItem(item.id);
      }
    });

    onCartStatusChange('SUBMIT');
  }

  return (
    <>
      {cartStatus === 'CHECKOUT' ? (
        <Modal open={cartStatus === 'CHECKOUT'}>
          <form onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <p>Total Amount: {currencyFormatter.format(cartTotalPrice)}</p>
            <Input label="Full Name" id="name" name="name" />
            <Input
              label="E-Mail Address"
              id="email"
              type="email"
              name="email"
            />
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
        </Modal>
      ) : (
        <Modal open={cartStatus === 'SUBMIT'}>
          <h2>Success!</h2>
          <p>Your order was submitted successfully.</p>
          <p>
            We will get back to you with more details via email within the next
            few minutes.
          </p>
          <p className="modal-actions">
            <Button text="Okay" onClick={handleCloseModal} />
          </p>
        </Modal>
      )}
    </>
  );
}

export default Checkout;
