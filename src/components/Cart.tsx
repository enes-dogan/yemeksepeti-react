import { useRef } from 'react';
import { ModalRef, CartProps } from '../types.ts';

import Modal from './UI/Modal.tsx';
import Button from './UI/Button.tsx';

const DUMMY_CART_ITEMS = [
  {
    id: 'm3',
    name: 'Caesar Salad',
    price: '7.99',
    description:
      'Romaine lettuce tossed in Caesar dressing, topped with croutons and parmesan shavings.',
    image: 'images/caesar-salad.jpg',
  },
  {
    id: 'm4',
    name: 'Spaghetti Carbonara',
    price: '10.99',
    description:
      'Al dente spaghetti with a creamy sauce made from egg yolk, pecorino cheese, pancetta, and pepper.',
    image: 'images/spaghetti-carbonara.jpg',
  },
];

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
        {DUMMY_CART_ITEMS.map(item => (
          <li key={item.id} className="cart-item">
            <p>
              {item.name} - 3 X ${item.price}
            </p>
            <p className="cart-item-actions">
              <button>-</button>
              <span>3</span>
              <button>+</button>
            </p>
          </li>
        ))}
      </ul>
      <p className="cart-total">$289.73</p>
      <p className="modal-actions">
        <Button text="Close" style="text-button" onClick={handleCloseModal} />
        <Button onClick={handleGoCheckout}>Go to Checkout</Button>
      </p>
    </Modal>
  );
}

export default Cart;
