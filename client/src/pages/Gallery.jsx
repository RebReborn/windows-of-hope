import React, { useState } from "react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import galleryData from "../utils/galleryData";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const navigate = (direction) => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? galleryData.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === galleryData.length - 1 ? 0 : currentIndex + 1;
    }
    setSelectedImage(galleryData[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      {/* Gallery Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          Our Gallery
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Visual stories of hope, transformation, and impact
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {galleryData.map((image, index) => (
          <div 
            key={image.id} 
            className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => openImage(image, index)}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white font-medium truncate">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <button 
            onClick={closeImage}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors duration-200"
          >
            <FiX className="w-8 h-8" />
          </button>

          <button 
            onClick={() => navigate('prev')}
            className="absolute left-6 text-white hover:text-gray-300 transition-colors duration-200 p-2"
          >
            <FiChevronLeft className="w-8 h-8" />
          </button>

          <div className="max-w-4xl w-full">
            <div className="relative">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="max-h-[80vh] w-full object-contain rounded-lg"
              />
            </div>
            <div className="mt-4 text-center text-white">
              <p className="text-lg font-medium">{selectedImage.caption}</p>
              <p className="text-sm text-gray-300 mt-1">
                {currentIndex + 1} of {galleryData.length}
              </p>
            </div>
          </div>

          <button 
            onClick={() => navigate('next')}
            className="absolute right-6 text-white hover:text-gray-300 transition-colors duration-200 p-2"
          >
            <FiChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;