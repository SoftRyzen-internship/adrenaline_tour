'use client';

import { useState } from 'react';

import clsx from 'clsx';
import { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import BtnSlider from '@/components/ui/BtnSlider';

import { ISliderProps } from './Slider.types';

const Slider: React.FC<ISliderProps> = ({
  slides,
  section,
  className = '',
}) => {
  const [isPrevSlide, setIsPrevSlide] = useState(true);
  const [isNextSlide, setIsNextSlide] = useState(false);

  const slidesToShowTabl = section === 'reviews' ? 1 : 2;
  const slidesToShowDesc = section === 'reviews' ? 1 : 3;

  const breakpoints = {
    768: {
      slidesPerView: slidesToShowTabl,
      spaceBetween: 32,
    },
    1280: {
      slidesPerView: slidesToShowDesc,
    },
  };

  return (
    <div className={clsx('relative', className)}>
      <Swiper
        modules={[Navigation]}
        wrapperTag='ul'
        loop={true}
        spaceBetween={8}
        grabCursor={true}
        slidesPerView={1}
        navigation={{
          nextEl: '.btn-next',
          prevEl: '.btn-prev',
        }}
        onSlideChange={(swiper: SwiperType) => {
          setIsPrevSlide(swiper.isBeginning);
          setIsNextSlide(swiper.isEnd);
        }}
        breakpoints={breakpoints}
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id} tag='li'>
            {slide.content}
          </SwiperSlide>
        ))}
      </Swiper>
      <BtnSlider
        section={section}
        isPrevSlide={isPrevSlide}
        isNextSlide={isNextSlide}
      />
    </div>
  );
};

export default Slider;
