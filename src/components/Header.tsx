import { useContext } from 'react';
import CartContext from '../store/CartContext.tsx';

import { HeaderProps } from '../types.ts';

import Button from './UI/Button.tsx';
import logoImg from '../assets/logo.jpg';

function Header({ onToggleCart }: HeaderProps) {
  const { items } = useContext(CartContext);

  const allItemsQuantity = items.reduce((acc, item) => acc + item.quantity!, 0);

  function handleCartClick() {
    onToggleCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} />
        <h1>Yemeksepeti</h1>
      </div>
      <nav>
        <Button style="text-button" onClick={handleCartClick}>
          Cart ({allItemsQuantity})
        </Button>
      </nav>
    </header>
  );
}

export default Header;
