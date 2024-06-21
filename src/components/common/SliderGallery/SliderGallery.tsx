'use client';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './SliderGallery.css';
import BtnSlider from '@/components/ui/BtnSlider';

import { ISliderGalleryProps } from './SliderGallery.types';

const SliderGallery: React.FC<ISliderGalleryProps> = ({ slides }) => {
  const breakpoints = {
    1280: {
      spaceBetween: 16,
    },
  };

  return (
    <div className=''>
      <Swiper
        modules={[Navigation]}
        wrapperTag='ul'
        loop={true}
        spaceBetween={8}
        grabCursor={true}
        slidesPerView={'auto'}
        navigation={{
          nextEl: '.gallery.btn-next',
          prevEl: '.gallery.btn-prev',
        }}
        breakpoints={breakpoints}
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id} tag='li' className='gallery'>
            {slide.content}
          </SwiperSlide>
        ))}
      </Swiper>
      <BtnSlider section='gallery' />
    </div>
  );
};

export default SliderGallery;
