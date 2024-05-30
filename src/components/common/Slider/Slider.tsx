import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import clsx from 'clsx';

import 'swiper/css';
import { ISliderProps } from './Slider.types';

import { slider } from '@/data';

import Left from '/public/icons/arrow-left.svg';
import Right from '/public/icons/arrow-right.svg';

const Slider: React.FC<ISliderProps> = ({ slides, isReview = false }) => {
  const slidesToShowTabl = isReview ? 1 : 2;
  const slidesToShowDesc = isReview ? 1 : 3;

  return (
    <div className='relative'>
      <Swiper
        className=''
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
      <button
        type='button'
        aria-label={slider.prev}
        className={clsx('btn-prev', {
          'fill-white': isReview,
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
          'fill-white': isReview,
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
  );
};

export default Slider;
