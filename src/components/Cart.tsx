import { useRef, useContext } from 'react';
import CartContext from '../store/CartContext.tsx';

import { currencyFormatter } from '../util/formatting.ts';
import { ModalRef, CartProps } from '../types.ts';

import CartItem from './CartItem.tsx';
import Modal from './UI/Modal.tsx';
import Button from './UI/Button.tsx';

function Cart({ cartOpen, isOpen, onToggleCart, onToggleCheckout }: CartProps) {
  const { items } = useContext(CartContext);

  const cartTotalPrice = items.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.quantity!,
    0
  );

  const dialog = useRef<ModalRef>(null);

  if (isOpen === 'cartOpen') {
    dialog.current!.open();
    onToggleCart();
  }

  function handleGoCheckout() {
    onToggleCheckout();
    handleCloseModal();
  }

  function handleCloseModal() {
    dialog.current!.close();
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
