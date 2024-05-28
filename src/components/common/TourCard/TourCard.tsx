import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import Location from '/public/icons/location.svg';

import s from './TourCard.module.css';
import { ITourCardProps } from './TourCard.types';

const TourCard: React.FC<ITourCardProps> = ({ data }) => {
  const { imgSrc, alt, title, date, location, type, duration, link } = data;

  return (
    <div className='group relative flex h-[411px] w-[328px] flex-col border border-red md:h-[439px] md:w-[334px] xl:h-[485px] xl:w-[384px]'>
      <p className='absolute right-4 top-4 z-10 bg-white px-3 py-[11px] font-unbounded text-[10px] font-bold leading-[15px] text-darkBlue transition group-hover:text-accentDefaultOrange md:px-[11px] md:py-4 md:text-[12px] md:leading-[16px]'>
        {date}
      </p>
      <div className='relative mb-2 h-[291px] w-full md:mb-3 xl:mb-4 xl:h-[333px]'>
        <Image className='object-cover' src={imgSrc} fill alt={alt} />
      </div>
      <div className='flex-grow'>
        <h2 className='mb-[6px] font-inter text-lightLarge font-bold text-blueDefault md:mb-2 md:text-extraLarge xl:text-[28px] xl:leading-[30px]'>
          {title}
        </h2>
        <div className='flex flex-wrap pt-[6px] font-unbounded text-[10px] font-bold leading-[15px] text-darkBlue md:text-[12px] md:leading-[16px]'>
          <Location width={10} height={14} />{' '}
          <p className='pl-1 pr-2'>{location}</p>
          <p className={clsx('type flex px-2', s['type'])}>{type.join(', ')}</p>
          <p className='px-2'>{duration}</p>
        </div>
      </div>
      <div className='transition-all xl:opacity-0 xl:group-hover:flex xl:group-hover:opacity-100'>
        <Link
          className='mt-auto py-2 font-unbounded text-light leading-[21px] text-accentDefaultOrange '
          href={link}
        >
          Детальніше -&gt;
        </Link>
      </div>
    </div>
  );
};

export default TourCard;
