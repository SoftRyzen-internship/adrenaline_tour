'use client';

import React, { useEffect, useRef, useCallback } from 'react';

import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Swiper } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/effect-fade';

import { ISliderHeroProps } from './SliderHero.types';

const SliderHero: React.FC<ISliderHeroProps> = ({ images }) => {
  const swiperRef = useRef<Swiper | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const getBackgroundImage = useCallback(
    (slide: HTMLElement): string => {
      const index = slide.getAttribute('data-index');
      if (index === null) return '';
      const imgData = images[parseInt(index, 10)];
      const width = window.innerWidth;
      const pixelRatio = window.devicePixelRatio;

      if (width >= 1280) {
        return pixelRatio >= 2 ? imgData.lg2x : imgData.lg;
      } else if (width > 480) {
        return pixelRatio >= 2 ? imgData.md2x : imgData.md;
      } else {
        return pixelRatio >= 2 ? imgData.sm2x : imgData.sm;
      }
    },
    [images],
  );

  useEffect(() => {
    const swiperInstance = swiperRef.current;

    if (swiperInstance) {
      swiperInstance.on('slideChange', () => {
        swiperInstance.slides.forEach((slide: HTMLElement) => {
          const bgImage = getBackgroundImage(slide);
          slide.style.backgroundImage = `url(${bgImage})`;
        });
      });

      swiperInstance.slides.forEach((slide: HTMLElement) => {
        const bgImage = getBackgroundImage(slide);
        slide.style.backgroundImage = `url(${bgImage})`;
      });
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (swiperInstance) {
            if (entry.isIntersecting) {
              swiperInstance.autoplay.start();
            } else {
              swiperInstance.autoplay.stop();
            }
          }
        });
      },
      { threshold: 0.5 },
    );

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, [getBackgroundImage]);

  return (
    <div className='h-[640px] w-full md:h-[780px]' ref={containerRef}>
      <SwiperComponent
        onSwiper={swiper => {
          swiperRef.current = swiper;
        }}
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
        {images.map((_, index) => (
          <SwiperSlide
            className='swiper-slide bg-darkBlue bg-cover bg-center bg-no-repeat'
            data-index={index.toString()}
            key={index}
          ></SwiperSlide>
        ))}
      </SwiperComponent>
    </div>
  );
};

export default SliderHero;
