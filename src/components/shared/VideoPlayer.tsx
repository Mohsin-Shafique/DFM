import { useState } from "react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
}

const VideoPlayer = ({ src, poster, className = "" }: VideoPlayerProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='relative'>
      {isLoading && (
        <div className='absolute inset-0 bg-gray-200 animate-pulse rounded-lg'>
          {poster && (
            <img
              src={poster}
              alt='Video thumbnail'
              className={`w-full h-full object-cover rounded-lg ${className}`}
            />
          )}
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-gray-600'>
              Loading video...
            </div>
          </div>
        </div>
      )}
      <video
        src={src}
        poster={poster}
        controls
        preload='none'
        className={`w-full rounded-lg ${className}`}
        onLoadedData={() => setIsLoading(false)}
      />
    </div>
  );
};

export default VideoPlayer;
