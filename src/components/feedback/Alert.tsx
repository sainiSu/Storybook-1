import React from 'react';

type AlertType = 'success' | 'error' | 'warning' | 'info';

type Props = {
  type?: AlertType;
  message: string;
};

const bgColors = {
  success: 'bg-green-100 text-green-800',
  error: 'bg-red-100 text-red-800',
  warning: 'bg-yellow-100 text-yellow-800',
  info: 'bg-blue-100 text-blue-800',
};

export const Alert: React.FC<Props> = ({ type = 'info', message }) => {
  return (
    <div className={`p-4 rounded ${bgColors[type]}`}>
      {message}
    </div>
  );
};
