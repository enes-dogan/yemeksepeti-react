import { useRef, useContext, useEffect } from 'react';
import CartContext from '../store/CartContext.tsx';

import { currencyFormatter } from '../util/formatting.ts';
import { ModalRef, CartProps } from '../types.ts';

import CartItem from './CartItem.tsx';
import Modal from './UI/Modal.tsx';
import Button from './UI/Button.tsx';

function Cart({ cartStatus, onCartStatusChange }: CartProps) {
  const { items } = useContext(CartContext);
  const dialog = useRef<ModalRef>(null);

  const cartTotalPrice = items.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.quantity!,
    0
  );

  useEffect(() => {
    if (cartStatus === 'CART') dialog.current!.open();
    if (cartStatus === 'CLOSE') dialog.current!.close();
  }, [cartStatus]);

  function handleGoCheckout() {
    onCartStatusChange('CHECKOUT');
  }

  function handleCloseModal() {
    onCartStatusChange('CLOSE');
  }

  return (
    <Modal ref={dialog} cssClasses="cart">
      <h2>Your Cart</h2>
      <ul>
        {items.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotalPrice)}</p>
      <p className="modal-actions">
        <Button text="Close" style="text-button" onClick={handleCloseModal} />
        {items.length > 0 && (
          <Button onClick={handleGoCheckout}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
}

export default Cart;
