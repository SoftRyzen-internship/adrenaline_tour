import clsx from 'clsx';
import Image from 'next/image';

import ArrowRight from '/public/icons/arrow-right.svg';
import Location from '/public/icons/location.svg';

import LinkButton from '@/components/ui/LinkButton';
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
          <Location width={10} height={14} />
          <p className='pl-1 pr-2'>{countryNames}</p>
          <p className={clsx('type flex px-2', s['type'])}>{activitiesNames}</p>
          <p className='px-2'>{duration}</p>
        </div>
      </div>
      <div className='transition-all duration-700 group-hover:scale-110 group-focus:scale-110 xl:opacity-0 xl:group-hover:opacity-100 xl:group-focus:opacity-100'>
        <LinkButton
          href={slug}
          variant='secondary'
          iconPosition='after'
          icon={<ArrowRight width={24} height={24} className='h-6 w-6' />}
        >
          {tourCardData.button}
        </LinkButton>
      </div>
    </div>
  );
};

export default TourCard;
