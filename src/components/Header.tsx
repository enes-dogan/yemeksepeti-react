import { useContext } from 'react';
import CartContext from '../store/CartContext.tsx';
import UserProgressContext from '../store/UserProgressContext.tsx';

import logoImg from '../assets/logo.jpg';
import Button from './UI/Button.tsx';

function Header() {
  const { items } = useContext(CartContext);
  const { onCartStatusChange } = useContext(UserProgressContext);

  const allItemsQuantity = items.reduce((acc, item) => acc + item.quantity!, 0);

  function handleCartOpen() {
    onCartStatusChange('CART');
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} />
        <h1>Yemeksepeti</h1>
      </div>
      <nav>
        <Button style="text-button" onClick={handleCartOpen}>
          Cart ({allItemsQuantity})
        </Button>
      </nav>
    </header>
  );
}

export default Header;
