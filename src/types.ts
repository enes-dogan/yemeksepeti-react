export interface MealType {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  quantity?: number;
}

export type cartStatusTypes = 'CLOSE' | 'CART' | 'CHECKOUT' | 'SUBMIT';

export interface UserProgressContextType {
  onCartStatusChange: (status: cartStatusTypes) => void;
  cartStatus: cartStatusTypes;
}

export interface CartContextParams {
  items: MealType[] | [];
  addItem: (item: MealType) => void;
  removeItem: (id: string) => void;
}

type CartState = { items: MealType[] };

type cartReducerActionType =
  | { type: 'ADD_ITEM'; item: MealType }
  | { type: 'REMOVE_ITEM'; id: string };

export type cartReducerFn = (
  state: CartState,
  action: cartReducerActionType
) => CartState;

export type urlType =
  | 'http://localhost:3000/meals'
  | 'http://localhost:3000/orders';

export type configType =
  | {
      method: 'POST';
      headers: {
        'Content-Type': 'application/json';
      };
      body?: SendRequestData;
    }
  | { method: 'GET' };

export interface SendRequestData {
  order: {
    items: MealType[];
    customer: {
      [k: string]: FormDataEntryValue;
    };
  };
}

export type useHttpHookFn = (
  url: urlType,
  config: configType
) => useHttpFnReturn;

export interface useHttpFnReturn {
  isFetching: boolean;
  error: { message: string };
  fetchedData: MealType[];
  sendRequest: (data: SendRequestData) => void;
}

export interface MealItemProps {
  meal: MealType;
}

export interface CartItemProps {
  item: MealType;
}

export interface ModalProps {
  children: React.ReactNode;
  cssClasses?: string;
  open: boolean;
  onClose: () => void;
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  style?: 'text-button';
  onClick?: () => void;
}

export interface ErrorProps {
  title: string;
  message: string;
}

export interface childrenProp {
  children: React.ReactNode;
}
