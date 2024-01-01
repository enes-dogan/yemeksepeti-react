export interface MealType {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  quantity?: number;
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

export interface childrenProp {
  children: React.ReactNode;
}

export interface ModalProps {
  children: React.ReactNode;
  cssClasses?: string;
}

export interface ModalRef {
  modal: HTMLDialogElement | null;
  open: () => void;
  close: () => void;
}

export interface HeaderProps {
  onToggleCart: () => void;
}

export interface CartProps {
  cartOpen: boolean;
  onToggleCart: () => void;
  onToggleCheckout: () => void;
}

export interface CheckoutProps {
  goCheckout: boolean;
  onToggleCheckout: () => void;
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

export interface CartModalProps {
  title: string;
  actions: React.ReactNode;
}
