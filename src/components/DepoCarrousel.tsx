import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
  const [centerIndex, setCenterIndex] = useState(1); // Índice inicial do slide central

  const handleSlideChange = (swiper: any) => {
    const visibleSlides = swiper.params.slidesPerView; // Quantidade de slides visíveis
    const newCenterIndex = swiper.activeIndex + Math.floor(visibleSlides / 2); // Calcula o índice central
    setCenterIndex(newCenterIndex);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto mb-28 overflow-hidden pb-20">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        navigation
        pagination={{
          clickable: true,
          el: '.custom-pagination',
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        onSlideChange={handleSlideChange}
        className="rounded-lg"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <div
              className={`flex flex-col items-center p-4 transition-transform duration-300 ${
                index === centerIndex
                  ? 'scale-110 shadow-2xl opacity-100' // Destaque para o slide central
                  : 'scale-90 opacity-60' // Reduz tamanho e opacidade dos slides não centrais
              }`}
            >
              <iframe
                className="w-full max-w-[300px] h-[480px] rounded-lg"
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
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination flex justify-center mt-6 space-x-2">
        {/* Paginação personalizada */}
      </div>
    </div>
  );
};

export default DepoCarrousel;
