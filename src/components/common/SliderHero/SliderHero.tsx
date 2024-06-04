'use client';

import Image from 'next/image';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';

import { mainHeroImages } from '@/data';
import { ourToursHeroImages } from '@/data';

import { ISliderHeroProps } from './SliderHero.types';

const SliderHero: React.FC<ISliderHeroProps> = ({ page = 'main' }) => {
  let images;
  if (page === 'tours') {
    images = ourToursHeroImages;
  } else {
    images = mainHeroImages;
  }

  return (
    <div className='absolute -z-10 h-[640px] w-full bg-darkBlue bg-cover bg-center bg-no-repeat md:h-[780px]'>
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        effect='fade'
        fadeEffect={{ crossFade: true }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        className='h-full w-full'
      >
        {images.map(({ _id, src, alt }) => (
          <SwiperSlide className='swiper-slide flex items-center' key={_id}>
            <div className='w-fill relative h-[640px] overflow-hidden md:h-[780px]'>
              <Image
                fill
                src={src}
                alt={alt}
                priority
                style={{
                  objectFit: 'cover',
                  objectPosition: '78% 60%',
                }}
              />
              <div className='absolute inset-0 bg-black opacity-30'></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderHero;
