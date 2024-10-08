'use client';
import { Carousel } from '@material-tailwind/react';

export function Carrousel() {
  return (
    <Carousel
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill('').map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="/assets/capa1.jpg"
        alt="image 1"
        className="h-[28rem] w-full object-cover"
      />
      <img
        src="/assets/capa2.jpg"
        alt="image 1"
        className="h-[28rem] w-full object-cover"
      />
      <img
        src="/assets/capa3.jpg"
        alt="image 1"
        className="h-[28rem] w-full object-cover"
      />
      <img
        src="/assets/capa4.jpg"
        alt="image 1"
        className="h-[28rem] w-full object-cover"
      />
    </Carousel>
  );
}
