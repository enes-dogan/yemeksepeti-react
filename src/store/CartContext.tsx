import { createContext, useReducer } from 'react';

export const CartContext = createContext({
  meals: [],
  addMeals: () => {},
  updateMeals: () => {},
});

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return state;

    default:
      break;
  }
}

export default function CartContextProvider({ children }) {
  const [meals, cartDispatch] = useReducer(cartReducer, { meals: [] });

  const cartCtx = {
    meals,
  };

  return (
    <CartContext.Provider value={cartCtx}>{children}</CartContext.Provider>
  );
}
