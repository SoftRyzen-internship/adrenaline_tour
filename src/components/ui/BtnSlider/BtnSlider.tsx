import clsx from 'clsx';

import IconButton from '@/components/ui/IconButton';
import { btnSlider } from '@/data';

import Left from '/public/icons/arrow-left.svg';
import Right from '/public/icons/arrow-right.svg';

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
      )}
    >
      <IconButton
        type='button'
        ariaLabel={btnSlider.prev}
        className={clsx(
          'btn-prev',
          section === 'reviews' && 'xl:absolute xl:left-0 xl:top-[130px]',
          section === 'reviews' && !isPrevSlide && 'fill-white',
          section === 'reviews' && isPrevSlide && 'fill-accentLightOrange',
          section === 'upcomingTours' &&
            'absolute right-[52px] top-[-80px] h-10 w-10 fill-accentDefaultOrange transition hover:fill-accentDarkOrange focus:fill-accentDarkOrange active:fill-accentDarkOrange md:right-[80px] md:top-[-136px] md:h-16 md:w-16 xl:right-[114px] xl:top-[-157px] xl:h-[90px] xl:w-[90px]',
          section === 'worthVisiting' &&
            'absolute right-[52px] top-[-80px] h-10 w-10 fill-accentDefaultOrange transition hover:fill-accentDarkOrange focus:fill-accentDarkOrange active:fill-accentDarkOrange md:right-[80px] md:top-[-136px] md:h-16 md:w-16 xl:right-[114px] xl:top-[-195px] xl:h-[90px] xl:w-[90px]',
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
          section === 'reviews' && 'xl:absolute xl:left-[114px] xl:top-[130px]',
          section === 'reviews' && !isNextSlide && 'fill-white',
          section === 'reviews' && isNextSlide && 'fill-accentLightOrange',
          section === 'upcomingTours' &&
            'absolute right-0 top-[-80px] h-10 w-10 fill-accentDefaultOrange transition hover:fill-accentDarkOrange focus:fill-accentDarkOrange active:fill-accentDarkOrange md:top-[-136px] md:h-16 md:w-16 xl:top-[-157px] xl:h-[90px] xl:w-[90px]',
          section === 'worthVisiting' &&
            'absolute right-0 top-[-80px] h-10 w-10 fill-accentDefaultOrange transition hover:fill-accentDarkOrange focus:fill-accentDarkOrange active:fill-accentDarkOrange md:top-[-136px] md:h-16 md:w-16 xl:top-[-195px] xl:h-[90px] xl:w-[90px]',
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
