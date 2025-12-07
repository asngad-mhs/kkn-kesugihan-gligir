
import React, { useEffect } from 'react';

interface ImageModalProps {
  imageUrl: string;
  description: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, description, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" 
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <figure className="bg-black p-2 rounded-lg shadow-2xl">
          <img 
            src={imageUrl} 
            alt={description}
            className="object-contain w-full max-h-[80vh] rounded-md"
          />
          <figcaption className="text-white text-center mt-3 p-2 text-lg">
            {description}
          </figcaption>
        </figure>
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-white text-gray-800 rounded-full h-10 w-10 flex items-center justify-center text-2xl font-bold shadow-lg hover:bg-gray-200 transition-colors"
          aria-label="Close"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ImageModal;