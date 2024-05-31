'use client';

import clsx from 'clsx';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import { slider } from '@/data';

import { useState } from 'react';

import { ISliderProps } from './Slider.types';

import Left from '/public/icons/arrow-left.svg';
import Right from '/public/icons/arrow-right.svg';

const Slider: React.FC<ISliderProps> = ({
  slides,
  isReview = false,
  className = '',
}) => {
  const [isPrevSlide, setIsPrevSlide] = useState(true);
  const [isNextSlide, setIsNextSlide] = useState(false);

  const slidesToShowTabl = isReview ? 1 : 2;
  const slidesToShowDesc = isReview ? 1 : 3;
  const slidesLoop = isReview ? false : true;

  return (
    <div className={clsx('relative', className)}>
      <Swiper
        modules={[Navigation]}
        wrapperTag='ul'
        loop={slidesLoop}
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
        breakpoints={{
          768: {
            slidesPerView: slidesToShowTabl,
            spaceBetween: 32,
          },
          1280: {
            slidesPerView: slidesToShowDesc,
          },
        }}
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id} tag='li'>
            {slide.content}
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={clsx({
          'mt-8 flex justify-center gap-3 md:mt-[55px] md:gap-4 xl:mt-0':
            isReview,
        })}
      >
        <button
          type='button'
          aria-label={slider.prev}
          className={clsx('btn-prev', {
            'fill-white xl:absolute xl:left-0 xl:top-[130px]': isReview,
            'fill-accentLightOrange': isReview && isPrevSlide,
            'absolute right-[52px] top-[-80px] h-10 w-10 fill-accentDefaultOrange transition hover:fill-accentDarkOrange focus:fill-accentDarkOrange active:fill-accentDarkOrange md:right-[80px] md:top-[-136px] md:h-16 md:w-16 xl:right-[114px] xl:top-[-157px] xl:h-[90px] xl:w-[90px]':
              !isReview,
          })}
        >
          <Left
            width={40}
            height={40}
            className='md:h-16 md:w-16 xl:h-[90px] xl:w-[90px]'
          />
        </button>
        <button
          type='button'
          aria-label={slider.next}
          className={clsx('btn-next', {
            'fill-white xl:absolute xl:left-[114px] xl:top-[130px]': isReview,
            'fill-accentLightOrange': isReview && isNextSlide,
            'absolute right-0 top-[-80px] h-10 w-10 fill-accentDefaultOrange transition hover:fill-accentDarkOrange focus:fill-accentDarkOrange active:fill-accentDarkOrange md:top-[-136px] md:h-16 md:w-16 xl:top-[-157px] xl:h-[90px] xl:w-[90px]':
              !isReview,
          })}
        >
          <Right
            width={40}
            height={40}
            className='md:h-16 md:w-16 xl:h-[90px] xl:w-[90px]'
          />
        </button>
      </div>
    </div>
  );
};

export default Slider;
