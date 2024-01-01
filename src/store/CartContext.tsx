import { createContext, useReducer } from 'react';
import {
  childrenProp,
  MealType,
  cartReducerFn,
  CartContextParams,
} from '../types.ts';

export const CartContext = createContext<CartContextParams>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
});

const cartReducer: cartReducerFn = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const existingCartItemIndex = state.items.findIndex(
      item => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity! + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }
  if (action.type === 'REMOVE_ITEM') {
    // ...
  }
  return { ...state, items: state.items }; //! TEMP
};

export function CartContextProvider({ children }: childrenProp) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item: MealType) {
    dispatchCartAction({ type: 'ADD_ITEM', item });
  }
  function removeItem(id: string) {
    dispatchCartAction({ type: 'REMOVE_ITEM', id });
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
