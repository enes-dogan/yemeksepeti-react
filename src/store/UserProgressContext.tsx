import { createContext, useState } from 'react';
import {
  cartStatusTypes,
  childrenProp,
  UserProgressContextType,
} from '../types.ts';

const UserProgressContext = createContext<UserProgressContextType>({
  cartStatus: 'CLOSE',
  onCartStatusChange: () => {},
});

export function UserProgressContextProdiver({ children }: childrenProp) {
  const [cartStatus, setCartStatus] = useState<cartStatusTypes>('CLOSE');

  function onCartStatusChange(status: cartStatusTypes) {
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

  const value = {
    cartStatus,
    onCartStatusChange,
  };

  return (
    <UserProgressContext.Provider value={value}>
      {children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;
