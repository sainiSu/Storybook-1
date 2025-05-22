import React from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export const TextInput: React.FC<Props> = ({ ...rest }) => {
  return (
    <input
      className="border px-3 py-2 rounded w-full focus:outline-none focus:ring focus:border-blue-500"
      {...rest}
    />
  );
};
