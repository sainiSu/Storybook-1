import React from 'react';

type Props = React.SelectHTMLAttributes<HTMLSelectElement>;

export const Dropdown: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <select
      className="border px-3 py-2 rounded w-full focus:outline-none focus:ring focus:border-blue-500"
      {...rest}
    >
      {children}
    </select>
  );
};
