import { useState } from 'react';
import { CartContextProvider } from './store/CartContext.tsx';

import { cartStatusTypes } from './types.ts';

import Header from './components/Header.tsx';
import Meals from './components/Meals.tsx';
import Cart from './components/Cart.tsx';
import Checkout from './components/Checkout.tsx';

function App() {
  const [cartStatus, setCartStatus] = useState<cartStatusTypes>('CLOSE');

  function handleCartStatus(status: cartStatusTypes) {
    switch (status) {
      case 'CLOSE':
        setCartStatus('CLOSE');
        break;
      case 'CART':
        setCartStatus('CART');
        break;
      case 'CHECKOUT':
        setCartStatus('CHECKOUT');
        break;
      case 'SUBMIT':
        setCartStatus('SUBMIT');
        break;
    }
  }

  return (
    <CartContextProvider>
      <Header onCartStatusChange={handleCartStatus} />
      <Meals />
      <Cart cartStatus={cartStatus} onCartStatusChange={handleCartStatus} />
      <Checkout cartStatus={cartStatus} onCartStatusChange={handleCartStatus} />
    </CartContextProvider>
  );
}

export default App;
