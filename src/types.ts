export interface Meals {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
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
  style?: 'text-button';
  onClick?: () => void;
}