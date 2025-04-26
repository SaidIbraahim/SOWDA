import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const ImageModal = ({ image, onClose }) => {
  // Close modal when escape key is pressed
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    
    // Prevent scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  // Close modal if background is clicked
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={handleBackgroundClick}
    >
      <div className="relative bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-auto">
        <button 
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          <FaTimes size={24} />
        </button>
        
        <div className="p-6">
          <div className="mb-4">
            <img 
              src={image.url} 
              alt={image.alt} 
              className="w-full h-auto max-h-[70vh] object-contain"
            />
          </div>
          
          <div className="mt-4">
            <h3 className="text-2xl font-bold mb-1">{image.title}</h3>
            <p className="text-gray-600 mb-2">{image.category} | {image.year}</p>
            <p className="text-gray-700">{image.alt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal; 