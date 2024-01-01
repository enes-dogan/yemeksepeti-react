import { useState } from 'react';
import { CartContextProvider } from './store/CartContext.tsx';

import Header from './components/Header.tsx';
import Meals from './components/Meals.tsx';
import Cart from './components/Cart.tsx';
import Checkout from './components/Checkout.tsx';

enum AppState {
  Close = 'close',
  CartOpen = 'cartOpen',
  CheckoutOpen = 'checkoutOpen',
}

function App() {
  const [currentModal, setCurrentModal] = useState<AppState>(AppState.Close);

  const [cartOpen, setCartOpen] = useState(false);
  const [goCheckout, setGoCheckout] = useState(false);

  console.log(currentModal);

  function toggleCartOpen() {
    // setCartOpen(!cartOpen);
    setCurrentModal(AppState.CartOpen);
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
        isOpen={currentModal}
        onToggleCart={toggleCartOpen}
        onToggleCheckout={toggleGoCheckout}
      />
      <Checkout goCheckout={goCheckout} onToggleCheckout={toggleGoCheckout} />
    </CartContextProvider>
  );
}

export default App;
