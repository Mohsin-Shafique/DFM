import { useState } from "react";

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  className?: string;
  width?: string | number;
  height?: string | number;
}

const ImageWithSkeleton = ({
  src,
  alt,
  className = "",
  width,
  height,
}: ImageWithSkeletonProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className='relative' style={{ width, height }}>
      {!loaded && (
        <div
          className={`animate-pulse bg-gray-200 absolute inset-0 rounded-lg ${className}`}
          style={{ width, height }}
        />
      )}
      <img
        src={src}
        alt={alt}
        loading='lazy'
        className={`transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${className}`}
        onLoad={() => setLoaded(true)}
        style={{ width, height }}
      />
    </div>
  );
};

export default ImageWithSkeleton;
