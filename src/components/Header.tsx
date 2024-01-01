import { useContext } from 'react';
import { CartContext } from '../store/CartContext.tsx';

import { HeaderProps } from '../types.ts';

import Button from './UI/Button.tsx';
import logoImg from '../assets/logo.jpg';

function Header({ onToggleCart }: HeaderProps) {
  const { cart } = useContext(CartContext);

  const cartItemQuantity = cart.length;

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
          Cart ({cartItemQuantity})
        </Button>
      </nav>
    </header>
  );
}

export default Header;
