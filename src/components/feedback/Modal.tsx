import React from 'react';

type Props = {
  isOpen: boolean;
  title: string;
  content: string;
  onClose: () => void;
};

export const Modal: React.FC<Props> = ({ isOpen, title, content, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-2">{content}</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};
