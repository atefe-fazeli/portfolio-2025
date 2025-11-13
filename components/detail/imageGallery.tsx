'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation
        loop={images.length > 1}
        className="h-80 md:h-96"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full bg-gray-900/30 backdrop-blur-xl rounded-2xl p-4">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/40 via-gray-900/30 to-brand-cyan/10 rounded-2xl"></div>
              
              {/* Border glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/15 to-brand-pink/15 rounded-2xl blur-md opacity-50"></div>
              
              <Image
                src={image}
                alt={`Project image ${index + 1}`}
                fill
                className="object-contain rounded-lg relative z-10"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageGallery;