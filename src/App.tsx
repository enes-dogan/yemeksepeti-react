import { useState } from 'react';
import { CartContextProvider } from './store/CartContext.tsx';

import Header from './components/Header.tsx';
import Meals from './components/Meals.tsx';
import Cart from './components/Cart.tsx';
import Checkout from './components/Checkout.tsx';

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [goCheckout, setGoCheckout] = useState(false);

  function toggleCartOpen() {
    setCartOpen(!cartOpen);
  }
  function toggleGoCheckout() {
    setGoCheckout(!goCheckout);
  }

  return (
    <CartContextProvider>
      <Header onToggleCart={toggleCartOpen} />
      <Meals />
      <Cart
        cartOpen={cartOpen}
        onToggleCart={toggleCartOpen}
        onToggleCheckout={toggleGoCheckout}
      />
      <Checkout goCheckout={goCheckout} onToggleCheckout={toggleGoCheckout} />
    </CartContextProvider>
  );
}

export default App;
