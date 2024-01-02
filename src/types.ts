export interface MealType {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  quantity?: number;
}

export type cartStatusTypes = 'CLOSE' | 'CART' | 'CHECKOUT' | 'SUBMIT';

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

export interface MealItemProps {
  meal: MealType;
}

export interface HeaderProps {
  onCartStatusChange: (status: cartStatusTypes) => void;
}

export interface CartProps {
  cartStatus: cartStatusTypes;
  onCartStatusChange: (status: cartStatusTypes) => void;
}

export interface CartItemProps {
  item: MealType;
}

export interface CheckoutProps extends CartProps {}

export interface ModalProps {
  children: React.ReactNode;
  cssClasses?: string;
}

export interface ModalRef {
  modal: HTMLDialogElement | null;
  open: () => void;
  close: () => void;
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

export interface childrenProp {
  children: React.ReactNode;
}
