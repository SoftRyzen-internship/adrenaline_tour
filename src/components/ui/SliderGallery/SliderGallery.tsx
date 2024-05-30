import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { ISliderGalleryProps } from './SliderGallery.types';

import { gallery } from '@/data';

import Left from '/public/icons/arrow-left.svg';
import Right from '/public/icons/arrow-right.svg';

const SliderGallery: React.FC<ISliderGalleryProps> = ({ slides }) => {
  return (
    <div className='container relative px-0'>
      <Swiper
        className=''
        modules={[Navigation]}
        wrapperTag='ul'
        loop={true}
        spaceBetween={8}
        grabCursor={true}
        slidesPerView={2}
        navigation={{
          nextEl: '.btn-next',
          prevEl: '.btn-prev',
        }}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
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
        aria-label={gallery.prev}
        className='btn-prev absolute right-[68px] top-[-72px] h-10 w-10 fill-accentDefaultOrange transition hover:fill-accentDarkOrange focus:fill-accentDarkOrange active:fill-accentDarkOrange md:right-[114px] md:top-[-120px] md:h-16 md:w-16 xl:right-[146px] xl:top-[-146px] xl:h-[90px] xl:w-[90px]'
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
        className='btn-next absolute right-4 top-[-72px] h-10 w-10 fill-accentDefaultOrange transition hover:fill-accentDarkOrange focus:fill-accentDarkOrange active:fill-accentDarkOrange md:right-[34px] md:top-[-120px] md:h-16 md:w-16 xl:right-[32px] xl:top-[-146px] xl:h-[90px] xl:w-[90px]'
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

export default SliderGallery;
