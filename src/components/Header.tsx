import { HeaderProps } from '../types';

import Button from './UI/Button';

import logoImg from '../assets/logo.jpg';

function Header({ onToggleCart }: HeaderProps) {
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
          Cart ({0})
        </Button>
      </nav>
    </header>
  );
}

export default Header;
