import { useState, useEffect } from 'react';

const ImageComponent = ({ 
  src, 
  alt, 
  className = '', 
  priority = false,
  sizes = '100vw',
  quality = 80
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isIntersecting, setIsIntersecting] = useState(priority);
  const [imageSrc, setImageSrc] = useState(null);

  // Dynamically import image only when needed
  useEffect(() => {
    if (isIntersecting || priority) {
      // For smaller images, fetch immediately
      setImageSrc(src);
    }
  }, [isIntersecting, priority, src]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!priority && typeof IntersectionObserver !== 'undefined') {
      const element = document.querySelector(`[data-image-id="${alt.replace(/\s+/g, '-')}"]`);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsIntersecting(true);
              observer.disconnect();
            }
          });
        },
        { rootMargin: '200px' } // Load images when they're 200px from viewport
      );

      observer.observe(element);
      return () => observer.disconnect();
    }
  }, [priority, alt]);

  // Generate a lightweight color placeholder based on the alt text
  const generatePlaceholderColor = () => {
    let hash = 0;
    for (let i = 0; i < alt.length; i++) {
      hash = alt.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = (hash & 0x00FFFFFF).toString(16).toUpperCase();
    return `#${('00000' + color).slice(-6)}20`; // Add 20 for opacity
  };

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      data-image-id={alt.replace(/\s+/g, '-')}
    >
      {/* Image */}
      {(imageSrc || priority) && (
        <img
          src={priority ? src : imageSrc}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onLoad={() => setIsLoading(false)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          fetchpriority={priority ? 'high' : 'auto'}
        />
      )}
      
      {/* Placeholder */}
      {isLoading && (
        <div 
          className="absolute inset-0 animate-pulse" 
          style={{ backgroundColor: generatePlaceholderColor() }}
        />
      )}
    </div>
  );
};

export default ImageComponent; 