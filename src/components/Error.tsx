import { ErrorProps } from '../types.ts';

function Error({ title, message }: ErrorProps) {
  return (
    <div className="error">
      <h2>{title}</h2>
      <p>Error: {message}</p>
    </div>
  );
}

export default Error;
