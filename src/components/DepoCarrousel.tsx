import { Carousel } from '@material-tailwind/react';
import React, { useState } from 'react';

type Video = {
  link: string;
  title: string;
  description: string;
};

type YouTubeShortsCarouselProps = {
  videos: Video[];
};

const formatYouTubeLink = (link: string) => {
  const id = link.split('/shorts/')[1]?.split('?')[0] || '';
  return `https://www.youtube.com/embed/${id}`;
};

const DepoCarrousel: React.FC<YouTubeShortsCarouselProps> = ({ videos }) => {
  const [activeIndex] = useState(1);

  return (
    <div className="relative w-full max-w-sm mx-auto mb-28">
      <Carousel
        className="rounded-lg relative overflow-visible"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex items-center justify-center space-x-4">
            {new Array(length).fill('').map((_, i) => (
              <span
                key={i}
                className={`w-4 h-4 rounded-full transition-transform duration-300 ${
                  activeIndex === i
                    ? 'bg-blue-600 scale-125 shadow-md'
                    : 'bg-gray-400'
                }`}
                style={{
                  cursor: 'pointer',
                  boxShadow:
                    activeIndex === i
                      ? '0 0 8px rgba(59, 130, 246, 0.8)'
                      : 'none',
                }}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        // prevArrow={({ handlePrev }) => (
        //   <button
        //     onClick={handlePrev}
        //     className="absolute -bottom-12 right-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg h-12 w-12"
        //     style={{
        //       marginInline: '20px',
        //     }}
        //   >
        //     <svg
        //       xmlns="http://www.w3.org/2000/svg"
        //       fill="none"
        //       viewBox="0 0 24 24"
        //       strokeWidth={2}
        //       stroke="currentColor"
        //       className="h-6 w-6"
        //     >
        //       <path
        //         strokeLinecap="round"
        //         strokeLinejoin="round"
        //         d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        //       />
        //     </svg>
        //   </button>
        // )}
        // nextArrow={({ handleNext }) => (
        //   <button
        //     onClick={handleNext}
        //     className="absolute -bottom-12 left-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg h-12 w-12"
        //     style={{
        //       marginInline: '20px',
        //     }}
        //   >
        //     <svg
        //       xmlns="http://www.w3.org/2000/svg"
        //       fill="none"
        //       viewBox="0 0 24 24"
        //       strokeWidth={2}
        //       stroke="currentColor"
        //       className="h-6 w-6"
        //     >
        //       <path
        //         strokeLinecap="round"
        //         strokeLinejoin="round"
        //         d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        //       />
        //     </svg>
        //   </button>
        // )}
      >
        {videos.map((video, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-4 transition-transform duration-300 ${
              index === activeIndex ? 'scale-110' : ''
            }`}
          >
            <iframe
              className="w-[300px] h-[480px] rounded-lg shadow-lg"
              src={formatYouTubeLink(video.link)}
              title={video.title || `Video ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            {video.title && (
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {video.title}
              </h3>
            )}
            {video.description && (
              <p className="text-sm text-gray-600">{video.description}</p>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default DepoCarrousel;
