import clsx from 'clsx';

import { Pages, IHeroProps } from '@/@types';
import { heroCardData } from '@/data';

const HeroCard: React.FC<IHeroProps> = ({ page }) => {
  const wrapper = clsx(
    'flex w-full flex-col gap-[24px] md:gap-[40px]',
    page === Pages.MAIN && 'xl:gap-[48px]',
    page === Pages.TOURS && 'xl:gap-[61px]',
  );

  const wrapperTitle = 'flex w-full items-center justify-start';

  const title = clsx(
    'title xl:w-3/5',
    page === Pages.MAIN && 'w-[304px] md:w-full',
    page === Pages.TOURS && 'w-1/2 md:w-1/3',
  );
  const wrapperDescription = clsx(
    'flex w-full justify-start',
    page === Pages.TOURS && 'xl:justify-end',
  );
  const description = clsx(
    'w-[313px] font-inter text-light text-white md:text-medium xl:w-1/3 xl:text-lightLarge',
    page === Pages.MAIN && 'md:w-3/5',
    page === Pages.TOURS && 'md:w-[405px]',
  );

  return (
    <div className={wrapper}>
      <div className={wrapperTitle}>
        {page === Pages.MAIN ? (
          <h1 className={title}>{heroCardData.main.title}</h1>
        ) : (
          <h1 className={title}>{heroCardData.tours.title}</h1>
        )}
      </div>
      <div className={wrapperDescription}>
        {page === Pages.MAIN ? (
          <p className={description}>{heroCardData.main.description}</p>
        ) : (
          <p className={description}>{heroCardData.tours.description}</p>
        )}
      </div>
    </div>
  );
};

export default HeroCard;
