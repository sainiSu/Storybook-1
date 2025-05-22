import React from 'react';

type Props = {
  message: string;
  onClose: () => void;
};

export const Toast: React.FC<Props> = ({ message, onClose }) => {
  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded shadow-lg">
      {message}
      <button onClick={onClose} className="ml-2">×</button>
    </div>
  );
};
