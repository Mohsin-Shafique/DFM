import { useEffect, useState } from "react";
import SectionHeading from "../components/shared/SectionHeading";
import GalleryLightbox from "../components/shared/GalleryLightbox";
import ImageWithSkeleton from "../components/shared/ImageWithSkeleton";
import VideoPlayer from "../components/shared/VideoPlayer";
import mainvideo from "../assets/gallery/mainvideo.mp4";
import v1 from "../assets/gallery/v1.mp4";
import v2 from "../assets/gallery/v2.mp4";
import v3 from "../assets/gallery/v3.mp4";
import v4 from "../assets/gallery/v4.mp4";
import v5 from "../assets/gallery/v5.mp4";
import v6 from "../assets/gallery/v6.mp4";
import im1 from "../assets/gallery/im1.jpg";
import im2 from "../assets/gallery/im2.jpg";
import i3 from "../assets/gallery/i3.jpg";
import i4 from "../assets/gallery/i4.jpg";
import i5 from "../assets/gallery/i5.jpg";
import i6 from "../assets/gallery/i6.jpg";
import i7 from "../assets/gallery/i7.jpg";
import i8 from "../assets/gallery/i8.jpg";
import one from "../assets/gallery/1.jpg";
import two from "../assets/gallery/2.jpg";
import three from "../assets/gallery/3.jpg";

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

  // Gallery images using assets from gallery folder
  const galleryImages = [
    {
      id: 1,
      src: im1,
      alt: "Gallery Image 1",
      category: "Facility",
    },
    {
      id: 2,
      src: im2,
      alt: "Gallery Image 2",
      category: "Process",
    },
    {
      id: 3,
      src: i3,
      alt: "Gallery Image 3",
      category: "Products",
    },
    {
      id: 4,
      src: i4,
      alt: "Gallery Image 4",
      category: "Facility",
    },
    {
      id: 5,
      src: i5,
      alt: "Gallery Image 5",
      category: "Process",
    },
    {
      id: 6,
      src: i6,
      alt: "Gallery Image 6",
      category: "Products",
    },
    {
      id: 7,
      src: i7,
      alt: "Gallery Image 7",
      category: "Packaging",
    },
    {
      id: 8,
      src: i8,
      alt: "Gallery Image 8",
      category: "Facility",
    },
  ];

  // Video gallery items
  const videoGallery = [
    {
      id: 1,
      src: v1,
      poster: one,
      title: "Production Process Overview",
      description:
        "An overview of our complete production process from start to finish.",
      category: "Process",
    },
    {
      id: 2,
      src: v2,
      poster: two,
      title: "Quality Control Procedures",
      description:
        "See how we maintain the highest quality standards in our products.",
      category: "Process",
    },
    {
      id: 3,
      src: v3,
      poster: three,
      title: "Facility Operations",
      description:
        "A detailed look at our state-of-the-art facility operations.",
      category: "Facility",
    },
    {
      id: 4,
      src: v4,
      poster: i7,
      title: "Product Showcase",
      description: "Explore our diverse range of premium flour products.",
      category: "Products",
    },
    {
      id: 5,
      src: v5,
      poster: im2,
      title: "Packaging Excellence",
      description:
        "Witness our meticulous packaging process that ensures product freshness.",
      category: "Packaging",
    },
    {
      id: 6,
      src: v6,
      poster: i4,
      title: "Advanced Technology",
      description:
        "Discover the cutting-edge technology behind our milling operations.",
      category: "Facility",
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
      {/* Hero Section with Background Video */}
      <section className='relative h-screen flex items-center justify-center overflow-hidden'>
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className='absolute inset-0 w-full h-full object-cover'
        >
          <source src={mainvideo} type='video/mp4' />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className='absolute inset-0 bg-black/40'></div>

        {/* Content */}
        <div className='relative z-10 text-center text-white px-4'>
          <h1 className='text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl'>
            Gallery
          </h1>
          <p className='text-xl md:text-2xl text-white/90 max-w-4xl mx-auto drop-shadow-lg'>
            Visual glimpses of our products, facility, and manufacturing
            process.
          </p>
        </div>
      </section>

      {/* Photo Gallery Section */}
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
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className='aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 group'
                onClick={() => openLightbox(index)}
              >
                <ImageWithSkeleton
                  src={image.src}
                  alt={image.alt}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
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
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {videoGallery.map((video) => (
              <div
                key={video.id}
                className='overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'
              >
                <div className='aspect-video relative group cursor-pointer'>
                  <VideoPlayer
                    src={video.src}
                    poster={video.poster}
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='p-4 bg-white'>
                  <h3 className='font-semibold text-lg text-primary mb-2'>
                    {video.title}
                  </h3>
                  <p className='text-sm text-gray-600 mb-3'>
                    {video.description}
                  </p>
                  <span className='inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full'>
                    {video.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
