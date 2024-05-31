import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './Slider.css';
import { ISliderGalleryProps } from './SliderGallery.types';

import { gallery } from '@/data';

import Left from '/public/icons/arrow-left.svg';
import Right from '/public/icons/arrow-right.svg';

const SliderGallery: React.FC<ISliderGalleryProps> = ({ slides }) => {
  return (
    <div>
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
          <SwiperSlide key={slide.id} tag='li'>
            {slide.content}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='container relative w-full fill-accentDefaultOrange transition hover:fill-accentDarkOrange focus:fill-accentDarkOrange active:fill-accentDarkOrange'>
        <button
          type='button'
          aria-label={gallery.prev}
          className='btn-prev absolute right-[68px] top-[-353px] md:right-[114px] md:top-[-467px] xl:right-[146px] xl:top-[-652px]'
        >
          <Left
            width={40}
            height={40}
            className='md:h-16 md:w-16 xl:h-[90px] xl:w-[90px]'
          />
        </button>
        <button
          type='button'
          aria-label={gallery.next}
          className='btn-next absolute right-[16px] top-[-353px] md:right-[34px] md:top-[-467px] xl:right-[32px] xl:top-[-652px]'
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

export default SliderGallery;
