import { useContext } from 'react';
import CartContext from '../store/CartContext.tsx';
import { CartItemProps } from '../types';

function CartItem({ item }: CartItemProps) {
  const { addItem, removeItem } = useContext(CartContext);

  return (
    <li key={item.id} className="cart-item">
      <p>
        {item.name} - 3 X ${item.price}
      </p>
      <p className="cart-item-actions">
        <button onClick={() => removeItem(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => addItem(item)}>+</button>
      </p>
    </li>
  );
}

export default CartItem;
