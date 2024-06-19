import clsx from 'clsx';
import Image from 'next/image';

import ArrowRight from '/public/icons/arrow-right.svg';
import Location from '/public/icons/location.svg';

import Link from 'next/link';

import { Pages } from '@/@types';
import { tourCardData } from '@/data';
import { formatDateDayMonthUk } from '@/utils';

import s from './TourCard.module.css';
import { ITourCardProps } from './TourCard.types';

const TourCard: React.FC<ITourCardProps> = ({ data }) => {
  const { attributes } = data;
  const { img, title, date, duration, slug, countries, activities } =
    attributes;

  const countryNames = countries.data
    .map(country => country.attributes.name)
    .join(', ');
  const activitiesNames = activities.data
    .map(activity => activity.attributes.name)
    .join(', ');

  const altText = img.data.attributes.alternativeText || title;

  return (
    <Link href={`${Pages.TOURS}/${slug}`}>
      <div className='group relative flex h-[411px] w-full flex-col md:h-[439px] md:w-[334px] xl:h-[485px] xl:w-[384px]'>
        <span className='absolute right-4 top-4 z-10 bg-white px-3 py-[11px] font-unbounded text-[10px] font-bold leading-[15px] text-darkBlue transition group-hover:text-accentDefaultOrange group-focus:text-accentDefaultOrange md:px-[11px] md:py-4 md:text-[12px] md:leading-[16px]'>
          {formatDateDayMonthUk(date)}
        </span>
        <div className='relative mb-2 h-[291px] w-full  overflow-hidden md:mb-3 xl:mb-4 xl:h-[333px]'>
          <Image
            className='object-cover transition-all duration-700 group-hover:scale-110 group-focus:scale-110'
            src={img.data.attributes.url}
            fill
            sizes='(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw'
            alt={altText}
          />
        </div>
        <div className='flex-grow'>
          <h2 className='mb-[6px] font-inter text-lightLarge font-bold text-blueDefault md:mb-2 md:text-extraLarge xl:text-[28px] xl:leading-[30px]'>
            {title}
          </h2>
          <div className='flex flex-wrap pt-[6px] font-unbounded text-[10px] font-bold leading-[15px] text-darkBlue md:text-[12px] md:leading-[16px]'>
            <Location
              width={12}
              height={12}
              className='h-[16px] fill-darkBlue md:w-[16px]'
            />
            <p className='pl-1 pr-2'>{countryNames}</p>
            <p className={clsx('type flex px-2', s['type'])}>
              {activitiesNames}
            </p>
            <p className='px-2'>{duration}</p>
          </div>
        </div>
        <div className='transition-all duration-700 xl:opacity-0 xl:group-hover:flex xl:group-hover:opacity-100 xl:group-focus:flex xl:group-focus:opacity-100'>
          <p className='relative inline-flex items-center justify-center gap-2 bg-transparent  fill-accentDarkOrange font-unbounded text-sm font-medium leading-[1.5] text-accentDefaultOrange transition-colors after:absolute after:bottom-[-3px] after:block after:h-[1.5px] after:w-full after:bg-accentDefaultOrange after:opacity-0 after:transition-opacity hover:fill-accentDarkOrange  hover:text-accentDarkOrange hover:after:opacity-100  focus:fill-accentDarkOrange focus:text-accentDarkOrange focus:after:opacity-100 xl:text-base'>
            {tourCardData.button}
            <ArrowRight width={24} height={24} className='h-6 w-6' />
          </p>
        </div>
      </div>
    </Link>
  );
};

export default TourCard;
