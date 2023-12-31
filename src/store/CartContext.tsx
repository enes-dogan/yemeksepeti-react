import { createContext, useState, useEffect } from 'react';
import { MealType, childrenProp } from '../types.ts';
import { useHttp } from '../hooks/useHttp.tsx';

interface CartContextParams {
  meals: MealType[] | [];
  cart: string[];
  addToCart: (id: string) => void;
}

export const CartContext = createContext<CartContextParams>({
  meals: [],
  cart: [],
  addToCart: id => {
    id;
  },
});

export default function CartContextProvider({ children }: childrenProp) {
  const [cart, setCart] = useState(['m0']);
  const [meals, setMeals] = useState([]);

  const { fetchedData } = useHttp();

  useEffect(() => {
    setMeals(fetchedData as []);
  }, [fetchedData]);

  function handleAddToCart(id: string) {
    setCart(prevCart => {
      if (prevCart.includes(id)) return prevCart;
      return [...prevCart, id];
    });
  }

  const CartCtx = {
    meals: meals,
    cart,
    addToCart: handleAddToCart,
  };
  return (
    <CartContext.Provider value={CartCtx}>{children}</CartContext.Provider>
  );
}
