import Image from 'next/image';
import React from 'react';

type ImageModalProps = {
  src: string;
  item: any;
  onClose: () => void;
};

const Modal: React.FC<ImageModalProps> = ({ item, onClose }) => {
return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:max-w-md">
        {item.src}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
