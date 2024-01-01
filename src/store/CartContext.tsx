import { createContext, useState } from 'react';
import { MealType, childrenProp } from '../types.ts';
import { useHttp } from '../hooks/useHttp.tsx';

interface CartContextParams {
  meals: MealType[] | [];
  cart: string[];
  addToCart: (id: string) => void;
  isFetching: boolean;
  error: { message: string | null };
  setError: (error: { message: string }) => void;
}

export const CartContext = createContext<CartContextParams>({
  meals: [],
  cart: [],
  addToCart: () => {},
  isFetching: false,
  error: { message: '' },
  setError: () => {},
});

export default function CartContextProvider({ children }: childrenProp) {
  const [cart, setCart] = useState<string[]>([]);

  const { fetchedData, isFetching, error, setError } = useHttp();

  function handleAddToCart(id: string) {
    setCart(prevCart => {
      if (prevCart.includes(id)) return prevCart;
      return [...prevCart, id];
    });
  }

  const CartCtx = {
    meals: fetchedData,
    cart,
    addToCart: handleAddToCart,
    isFetching,
    error,
    setError,
  };

  return (
    <CartContext.Provider value={CartCtx}>{children}</CartContext.Provider>
  );
}
