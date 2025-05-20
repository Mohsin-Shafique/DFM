import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryLightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
}) => {
  const [activeIndex, setActiveIndex] = useState(currentIndex);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, activeIndex, images.length]);

  useEffect(() => {
    setActiveIndex(currentIndex);
  }, [currentIndex]);

  const goToPrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      <button
        className="absolute top-4 right-4 text-white hover:text-secondary p-2 z-10"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <X size={28} />
      </button>

      <button
        className="absolute left-4 md:left-8 text-white hover:text-secondary p-4 z-10"
        onClick={goToPrevious}
        aria-label="Previous image"
      >
        <ChevronLeft size={32} />
      </button>

      <div className="relative w-full h-full flex items-center justify-center p-4 md:p-10">
        <img
          src={images[activeIndex]}
          alt={`Gallery image ${activeIndex + 1}`}
          className="max-h-full max-w-full object-contain"
        />

        <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm md:text-base">
          {activeIndex + 1} / {images.length}
        </div>
      </div>

      <button
        className="absolute right-4 md:right-8 text-white hover:text-secondary p-4 z-10"
        onClick={goToNext}
        aria-label="Next image"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
};

export default GalleryLightbox;