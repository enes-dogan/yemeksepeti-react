import Modal from './Modal.tsx';

function Cart() {
  return (
    <Modal>
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
        <button className="text-button undefined">Close</button>
        <button className="button undefined">Go to Checkout</button>
      </p>
    </Modal>
  );
}

export default Cart;
