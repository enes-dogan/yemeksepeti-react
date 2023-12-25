import { useRef } from 'react';
import { ModalRef, CartProps } from '../types.ts';

import Modal from './Modal.tsx';

function Cart({ cartOpen, onToggleCart, onToggleCheckout }: CartProps) {
  const dialog = useRef<ModalRef>(null);

  if (cartOpen) {
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
        <li className="cart-item">
          <p>Mac & Cheese - 3 X $8.99</p>
          <p className="cart-item-actions">
            <button>-</button>
            <span>3</span>
            <button>+</button>
          </p>
        </li>
        <li className="cart-item">
          <p>Mac & Cheese - 3 X $8.99</p>
          <p className="cart-item-actions">
            <button>-</button>
            <span>3</span>
            <button>+</button>
          </p>
        </li>
        <li className="cart-item">
          <p>Mac & Cheese - 3 X $8.99</p>
          <p className="cart-item-actions">
            <button>-</button>
            <span>3</span>
            <button>+</button>
          </p>
        </li>
      </ul>
      <p className="cart-total">$289.73</p>
      <p className="modal-actions">
        <button className="text-button undefined" onClick={handleCloseModal}>
          Close
        </button>
        <button className="button undefined" onClick={handleGoCheckout}>
          Go to Checkout
        </button>
      </p>
    </Modal>
  );
}

export default Cart;
