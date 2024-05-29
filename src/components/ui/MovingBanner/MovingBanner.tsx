import clsx from 'clsx';
import Marquee from 'react-fast-marquee';

import banner from '@/data/banner.json';

import s from './MovingBanner.module.css';

function MovingBanner() {
  return (
    <Marquee autoFill speed={60} className='bg-darkBlue'>
      <div className='flex items-center justify-center'>
        <p
          className={clsx(
            'px-[22px] font-unbounded text-[48px] font-bold leading-none text-additionalBlue md:text-[64px] xl:px-[44px] xl:text-[98px]',
            s['item'],
          )}
        >
          {banner.text}
        </p>
      </div>
    </Marquee>
  );
}

export default MovingBanner;
