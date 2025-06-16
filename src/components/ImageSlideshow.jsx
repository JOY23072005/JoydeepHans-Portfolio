import React, { useState, useEffect } from 'react';

const ImageSlideshow = ({ images,alt, slideInterval = 3000, className = '' }) => {
  // Validate images prop
  if (!images || images.length !== 3) {
    console.warn('ImageSlideshow component requires exactly 3 images');
    return null;
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect touch devices
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  // Auto-advance when hovering (or on touch devices)
  useEffect(() => {
    let interval;
    
    if (isHovering || isTouchDevice) {
      interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % images.length);
      }, slideInterval);
    }
    
    return () => clearInterval(interval);
  }, [isHovering, isTouchDevice, images.length, slideInterval]);

  // Manual navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Touch device handlers
  const handleTouchStart = () => {
    if (isTouchDevice) setIsHovering(true);
  };

  const handleTouchEnd = () => {
    if (isTouchDevice) setIsHovering(false);
  };

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {images.map((img, index) => (
        <div 
          role="img"
          aria-label={alt}
          key={index}
          className={`absolute inset-0 h-full w-full bg-cover bg-center transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${img})` }}
          aria-hidden={index !== currentIndex}
        />
      ))}
      
      {/* Navigation dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Progress indicator */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/20">
        <div 
          className="h-full bg-white/80 transition-all duration-300 ease-linear"
          style={{
            width: isHovering || isTouchDevice ? '100%' : '0%',
            transitionDuration: isHovering || isTouchDevice ? `${slideInterval}ms` : '0ms'
          }}
        />
      </div>
    </div>
  );
};

export default ImageSlideshow;