import { useState, useEffect } from 'react';
import { galleryImages, categories } from '../data/galleryData';
import ImageModal from '../components/ui/ImageModal';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredImages, setFilteredImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Filter images based on selected category
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const filtered = selectedCategory === 'All'
        ? galleryImages
        : galleryImages.filter(image => image.category === selectedCategory);
      
      setFilteredImages(filtered);
      setIsLoading(false);
    }, 300); // Simulate loading delay
  }, [selectedCategory]);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      {/* Header Section */}
      <section className="py-12 bg-primary/10">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Our Gallery</h1>
          <p className="text-lg text-gray-700">
            Visual proof of our work and impact across Somali communities.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12">
        <div className="container-custom">
          {/* Category Filters */}
          <div className="mb-8 flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${selectedCategory === category 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image) => (
                <div 
                  key={image.id} 
                  className="overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => openModal(image)}
                >
                  <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                    <div className="w-full h-64 bg-neutral relative overflow-hidden">
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/300x200?text=SOWDA+Image";
                        }}
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3">
                        <h3 className="text-sm font-medium truncate">{image.title}</h3>
                        <p className="text-xs opacity-80">{image.year}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredImages.length === 0 && !isLoading && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={closeModal} />
      )}

      {/* Info Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">About Our Gallery</h2>
            <p className="text-gray-700 mb-6">
              This gallery showcases our work and impact in communities across Somalia. 
              All images represent real projects and initiatives carried out by SOWDA and our partners.
            </p>
            <p className="text-gray-700">
              For more information about any of our projects or to request permission to use these images, 
              please contact us through our contact page.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage; 