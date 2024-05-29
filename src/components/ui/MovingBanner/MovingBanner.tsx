import clsx from 'clsx';

import banner from '@/data/banner.json';

import s from './MovingBanner.module.css';

function MovingBanner() {
  const renderMovingLineContainers = (count: number) => {
    const movingLineContainers = [];
    for (let i = 0; i < count; i++) {
      movingLineContainers.push(
        <li
          key={i}
          className={clsx(
            'flex h-[48px] gap-[88px] overflow-hidden  md:h-[102px] xl:h-[198px]',
            s['movingLine'],
          )}
          aria-hidden={i > 0}
        >
          <p className='flex items-center whitespace-nowrap text-nowrap  font-unbounded text-[48px] font-bold uppercase leading-[48px] text-additionalBlue md:text-[40px] md:leading-[46px] xl:text-[68px] xl:leading-[78px]'>
            {banner.text}
          </p>
          <p className='flex items-center whitespace-nowrap text-nowrap  font-unbounded text-[48px] font-bold uppercase leading-[48px] text-additionalBlue md:text-[40px] md:leading-[46px] xl:text-[68px] xl:leading-[78px]'>
            {banner.text}
          </p>
          <p className='flex items-center gap-[88px] whitespace-nowrap text-nowrap  font-unbounded text-[48px] font-bold uppercase leading-[48px] text-additionalBlue md:text-[40px] md:leading-[46px] xl:text-[68px] xl:leading-[78px]'>
            {banner.text}
          </p>
        </li>,
      );
    }
    return movingLineContainers;
  };

  return (
    <ul className='absolute left-0 flex select-none overflow-hidden bg-darkBlue'>
      {renderMovingLineContainers(3)}
    </ul>
  );
}

export default MovingBanner;
