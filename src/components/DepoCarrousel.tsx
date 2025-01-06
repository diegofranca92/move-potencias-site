import React from 'react';
import { Carousel, IconButton } from "@material-tailwind/react";

type Video = {
  link: string;
  title: string;
  description: string;
};

type YouTubeShortsCarouselProps = {
  videos: Video[];
};

const DepoCarrousel: React.FC<YouTubeShortsCarouselProps> = ({ videos }) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Carousel className="rounded-lg">
        {videos.map((video, index) => (
          <div key={index} className="p-4">
            <iframe
              className="w-full h-64 rounded-lg shadow-lg"
              src={video.link}
              title={video.title}
              allowFullScreen
            ></iframe>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800">{video.title}</h3>
              <p className="text-sm text-gray-600">{video.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default DepoCarrousel;
