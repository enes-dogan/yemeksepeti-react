import { useContext } from 'react';
import CartContext from '../store/CartContext.tsx';
import UserProgressContext from '../store/UserProgressContext.tsx';

import { currencyFormatter } from '../util/formatting.ts';

import CartItem from './CartItem.tsx';
import Modal from './UI/Modal.tsx';
import Button from './UI/Button.tsx';

function Cart() {
  const { items } = useContext(CartContext);
  const { cartStatus, onCartStatusChange } = useContext(UserProgressContext);

  const cartTotalPrice = items.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.quantity!,
    0
  );

  function handleGoCheckout() {
    onCartStatusChange('CHECKOUT');
  }

  function handleCloseModal() {
    onCartStatusChange('CLOSE');
  }

  return (
    <Modal cssClasses="cart" open={cartStatus === 'CART'}>
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
