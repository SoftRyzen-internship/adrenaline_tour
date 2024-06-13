import clsx from 'clsx';

import IconButton from '@/components/ui/IconButton';

import Left from '/public/icons/arrow-left.svg';
import Right from '/public/icons/arrow-right.svg';

import { btnSlider } from '@/data';

import { IBtnSliderProps } from './BtnSlider.types';

const BtnSlider: React.FC<IBtnSliderProps> = ({
  section,
  isNextSlide,
  isPrevSlide,
}) => {
  return (
    <div
      className={clsx(
        section === 'reviews' &&
          'mt-8 flex justify-center gap-3 md:mt-[55px] md:gap-4 xl:mt-0',
        section === 'gallery' && 'container relative w-full',
      )}
    >
      <IconButton
        type='button'
        ariaLabel={btnSlider.prev}
        className={clsx(
          'btn-prev',
          section === 'reviews' &&
            'reviews xl:absolute xl:bottom-[40px] xl:left-[-516px] xl:z-10',
          section === 'reviews' && !isPrevSlide && 'fill-white',
          section === 'reviews' && isPrevSlide && 'fill-accentLightOrange',
          section === 'upcomingTours' &&
            'upcomingTours absolute right-[52px] top-[-80px] z-10 h-10 w-10 fill-accentLightOrange transition hover:fill-accentDarkOrange focus:fill-accentDarkOrange active:fill-accentDarkOrange md:right-[80px] md:top-[-136px] md:h-16 md:w-16 xl:right-[114px] xl:top-[-157px] xl:h-[90px] xl:w-[90px]',
          section === 'worthVisiting' &&
            'worthVisiting absolute right-[52px] top-[-80px] h-10 w-10 fill-accentLightOrange transition hover:fill-accentDarkOrange focus:fill-accentDarkOrange active:fill-accentDarkOrange md:right-[80px] md:top-[-136px] md:h-16 md:w-16 xl:right-[114px] xl:top-[-195px] xl:h-[90px] xl:w-[90px]',
          section === 'gallery' &&
            'gallery absolute right-[68px] top-[-353px] fill-accentLightOrange transition hover:fill-accentDarkOrange focus:fill-accentDarkOrange active:fill-accentDarkOrange md:right-[114px] md:top-[-467px] xl:right-[146px] xl:top-[-652px]',
        )}
      >
        <Left
          width={40}
          height={40}
          className='md:h-16 md:w-16 xl:h-[90px] xl:w-[90px]'
        />
      </IconButton>
      <IconButton
        type='button'
        ariaLabel={btnSlider.next}
        className={clsx(
          'btn-next',
          section === 'reviews' &&
            'reviews xl:absolute xl:bottom-[40px] xl:left-[-402px] xl:z-10',
          section === 'reviews' && !isNextSlide && 'fill-white',
          section === 'reviews' && isNextSlide && 'fill-accentLightOrange',
          section === 'upcomingTours' &&
            'upcomingTours absolute right-0 top-[-80px] h-10 w-10 fill-accentLightOrange transition hover:fill-accentDarkOrange focus:fill-accentDarkOrange active:fill-accentDarkOrange md:top-[-136px] md:h-16 md:w-16 xl:top-[-157px] xl:h-[90px] xl:w-[90px]',
          section === 'worthVisiting' &&
            'worthVisiting absolute right-0 top-[-80px] h-10 w-10 fill-accentLightOrange transition hover:fill-accentDarkOrange focus:fill-accentDarkOrange active:fill-accentDarkOrange md:top-[-136px] md:h-16 md:w-16 xl:top-[-195px] xl:h-[90px] xl:w-[90px]',
          section === 'gallery' &&
            'gallery absolute right-[16px] top-[-353px] fill-accentLightOrange transition hover:fill-accentDarkOrange focus:fill-accentDarkOrange active:fill-accentDarkOrange md:right-[34px] md:top-[-467px] xl:right-[32px] xl:top-[-652px]',
        )}
      >
        <Right
          width={40}
          height={40}
          className='md:h-16 md:w-16 xl:h-[90px] xl:w-[90px]'
        />
      </IconButton>
    </div>
  );
};

export default BtnSlider;
