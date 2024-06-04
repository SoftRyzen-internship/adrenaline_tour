'use client';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './SliderGallery.css';
import BtnSlider from '@/components/ui/BtnSlider';

import { ISliderGalleryProps } from './SliderGallery.types';

const SliderGallery: React.FC<ISliderGalleryProps> = ({ slides }) => {
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
          nextEl: '.btn-next',
          prevEl: '.btn-prev',
        }}
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id} tag='li' className='gallery'>
            {slide.content}
          </SwiperSlide>
        ))}
        <BtnSlider section='gallery' />
      </Swiper>
    </div>
  );
};

export default SliderGallery;
