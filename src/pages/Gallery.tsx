import { useEffect, useState } from "react";
import SectionHeading from "../components/shared/SectionHeading";
import GalleryLightbox from "../components/shared/GalleryLightbox";
import ImageWithSkeleton from "../components/shared/ImageWithSkeleton";
import VideoPlayer from "../components/shared/VideoPlayer";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";
import video5 from "../assets/video5.mp4";
import poster3c from "../assets/3c.png";
import poster3m from "../assets/3m.png";
import posterSf from "../assets/sf.png";
import a10 from "../assets/a10.png";
import a20 from "../assets/a20.png";
import stockimage1 from "../assets/stockimage1.jpg";
import truck from "../assets/truck.jpg";
import zChokar from "../assets/z chokar.png";
import zf50 from "../assets/zf50.png";
import zf80 from "../assets/zf80.png";

const Gallery = () => {
  useEffect(() => {
    document.title = "Gallery - Data Flour Mills (DFM)";
  }, []);

  // Gallery filter categories
  const categories = ["All", "Products", "Facility", "Process", "Packaging"];
  const [activeCategory, setActiveCategory] = useState("All");

  // State for lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gallery images using local assets
  const galleryImages = [
    {
      id: 1,
      src: a10,
      alt: "A-10 Product",
      category: "Products",
    },
    {
      id: 2,
      src: a20,
      alt: "A-20 Product",
      category: "Products",
    },
    {
      id: 3,
      src: stockimage1,
      alt: "Factory Stock",
      category: "Facility",
    },
    {
      id: 4,
      src: truck,
      alt: "Delivery Truck",
      category: "Process",
    },
    {
      id: 5,
      src: zChokar,
      alt: "Z Chokar Product",
      category: "Products",
    },
    {
      id: 6,
      src: zf50,
      alt: "ZF-50 Product",
      category: "Products",
    },
    {
      id: 7,
      src: zf80,
      alt: "ZF-80 Product",
      category: "Products",
    },
    {
      id: 8,
      src: poster3c,
      alt: "3C Product",
      category: "Products",
    },
    {
      id: 9,
      src: poster3m,
      alt: "3M Product",
      category: "Products",
    },
    {
      id: 10,
      src: posterSf,
      alt: "Special Flour",
      category: "Products",
    },
  ];

  // Filter images by category
  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  // Get image sources for lightbox
  const lightboxImages = filteredImages.map((img) => img.src);

  // Open lightbox with specific image
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className='pt-32 pb-16 bg-primary relative overflow-hidden'>
        <div
          className={`absolute inset-0 bg-[url('${stockimage1}')] bg-cover bg-center opacity-20`}
        ></div>
        <div className='absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/90'></div>

        <div className='container-custom relative z-10 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Gallery
          </h1>
          <p className='text-xl text-white/90 max-w-3xl mx-auto'>
            Visual glimpses of our products, facility, and manufacturing
            process.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className='section-padding bg-gray-50'>
        <div className='container-custom'>
          <SectionHeading
            title='Photo Gallery'
            subtitle='Explore our gallery showcasing our premium flour products, state-of-the-art facility, and quality-focused manufacturing process.'
            centered
          />

          {/* Category Filters */}
          <div className='flex flex-wrap justify-center gap-3 mb-12'>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                } shadow-sm`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className='overflow-hidden rounded-lg shadow-md hover:shadow-lg cursor-pointer transition-transform hover:scale-[1.02]'
                onClick={() => openLightbox(index)}
              >
                <div className='aspect-square'>
                  <ImageWithSkeleton
                    src={image.src}
                    alt={image.alt}
                    className='w-full h-full object-cover transition-transform hover:scale-110 duration-500'
                  />
                </div>
                <div className='p-3 bg-white'>
                  <p className='text-sm text-gray-700'>{image.alt}</p>
                  <p className='text-xs text-gray-500'>{image.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className='text-center py-12'>
              <h3 className='text-xl font-medium text-gray-700 mb-2'>
                No images found
              </h3>
              <p className='text-gray-500'>
                No images in the {activeCategory} category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <GalleryLightbox
        images={lightboxImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />

      {/* Video Gallery Section */}
      <section className='section-padding bg-white'>
        <div className='container-custom'>
          <SectionHeading
            title='Video Gallery'
            subtitle='Watch videos of our manufacturing process and facility tours.'
            centered
          />
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='overflow-hidden rounded-lg shadow-md'>
              <div className='aspect-video relative group cursor-pointer'>
                <VideoPlayer
                  src={video1}
                  poster={poster3c}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='p-4 bg-white'>
                <h3 className='font-medium text-primary'>
                  Wheat Selection Process
                </h3>
                <p className='text-sm text-gray-600 mt-1'>
                  See how we select the finest wheat grains for our premium
                  flour products.
                </p>
              </div>
            </div>
            <div className='overflow-hidden rounded-lg shadow-md'>
              <div className='aspect-video relative group cursor-pointer'>
                <VideoPlayer
                  src={video2}
                  poster={poster3m}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='p-4 bg-white'>
                <h3 className='font-medium text-primary'>Facility Tour</h3>
                <p className='text-sm text-gray-600 mt-1'>
                  Take a virtual tour of our state-of-the-art milling facility.
                </p>
              </div>
            </div>
            <div className='overflow-hidden rounded-lg shadow-md'>
              <div className='aspect-video relative group cursor-pointer'>
                <VideoPlayer
                  src={video3}
                  poster={posterSf}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='p-4 bg-white'>
                <h3 className='font-medium text-primary'>
                  Advanced Milling Process
                </h3>
                <p className='text-sm text-gray-600 mt-1'>
                  Learn about our modern milling techniques that ensure premium
                  quality flour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
