import { CartContextProvider } from './store/CartContext.tsx';
import { UserProgressContextProdiver } from './store/UserProgressContext.tsx';

import Header from './components/Header.tsx';
import Meals from './components/Meals.tsx';
import Cart from './components/Cart.tsx';
import Checkout from './components/Checkout.tsx';

function App() {
  return (
    <UserProgressContextProdiver>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProdiver>
  );
}

export default App;
