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
        'flex gap-3 md:gap-4 xl:gap-6',
        section === 'upcomingTours' &&
          'absolute right-0 top-[-80px] z-30 md:top-[-136px] xl:top-[-157px]',
        section === 'reviews' &&
          'mt-8 justify-center md:mt-[55px] xl:absolute xl:bottom-[40px] xl:left-[-516px] xl:mt-0',
        section === 'gallery' && 'container relative w-full',
        section === 'worthVisiting' &&
          'absolute right-0 top-[-80px] md:top-[-136px] xl:top-[-195px]',
      )}
    >
      <IconButton
        type='button'
        ariaLabel={btnSlider.prev}
        className={clsx(
          'btn-prev',
          section === 'reviews' && 'reviews',
          section === 'reviews' && !isPrevSlide && 'fill-white',
          section === 'reviews' && isPrevSlide && 'fill-accentLightOrange',
          section === 'upcomingTours' &&
            'upcomingTours fill-accentLightOrange transition hover:fill-accentDarkOrange focus:fill-accentDarkOrange active:fill-accentDarkOrange ',
          section === 'worthVisiting' &&
            'worthVisiting fill-accentLightOrange transition hover:fill-accentDarkOrange focus:fill-accentDarkOrange active:fill-accentDarkOrange ',
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
          section === 'reviews' && 'reviews',
          section === 'reviews' && !isNextSlide && 'fill-white',
          section === 'reviews' && isNextSlide && 'fill-accentLightOrange',
          section === 'upcomingTours' &&
            'upcomingTours fill-accentLightOrange transition hover:fill-accentDarkOrange focus:fill-accentDarkOrange active:fill-accentDarkOrange ',
          section === 'worthVisiting' &&
            'worthVisiting fill-accentLightOrange transition hover:fill-accentDarkOrange focus:fill-accentDarkOrange active:fill-accentDarkOrange ',
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
