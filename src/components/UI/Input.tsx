import { InputProps } from '../../types.ts';

function Input({ label, id, ...props }: InputProps) {
  return (
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} type="text" {...props} required />
    </p>
  );
}

export default Input;
