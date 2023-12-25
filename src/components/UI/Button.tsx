import { ButtonProps } from '../../types.ts';
function Button({ children, text, style, ...props }: ButtonProps) {
  const classes = style === 'text-button' ? 'text-button' : 'button';
  return (
    <button className={classes} {...props}>
      {children ? children : text}
    </button>
  );
}

export default Button;
