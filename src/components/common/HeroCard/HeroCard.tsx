import clsx from 'clsx';

import { heroCardData } from '@/data';

import { IHeroCardProps } from './HeroCard.types';

const HeroCard: React.FC<IHeroCardProps> = ({ page }) => {
  const wrapper = clsx(
    'flex w-full flex-col gap-[24px] md:gap-[40px] ',
    { 'xl:gap-[48px]': page === 'main' },
    { 'xl:gap-[61px]': page === 'tours' },
  );
  const wrapperTitle = 'flex w-full items-center justify-start';
  const title = clsx(
    'title xl:w-3/5',
    { 'w-[304px] md:w-full ': page === 'main' },
    { 'w-1/2 md:w-1/3': page === 'tours' },
  );
  const wrapperDescription = clsx('flex w-full justify-start', {
    'xl:justify-end': page === 'tours',
  });
  const description = clsx(
    'w-[313px] font-inter text-light text-white md:text-medium xl:w-1/3 xl:text-lightLarge',
    { 'md:w-3/5': page === 'main' },
    { 'md:w-[405px]': page === 'tours' },
  );

  return (
    <div className={wrapper}>
      <div className={wrapperTitle}>
        {page === 'main' ? (
          <h1 className={title}>{heroCardData.main.title}</h1>
        ) : (
          <h1 className={title}>{heroCardData.tours.title}</h1>
        )}
      </div>
      <div className={wrapperDescription}>
        {page === 'main' ? (
          <p className={description}>{heroCardData.main.description}</p>
        ) : (
          <p className={description}>{heroCardData.tours.description}</p>
        )}
      </div>
    </div>
  );
};

export default HeroCard;
