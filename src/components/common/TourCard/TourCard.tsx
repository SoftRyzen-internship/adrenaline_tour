import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import s from './TourCard.module.css';
import { ITourCardProps } from './TourCard.types';

const TourCard: React.FC<ITourCardProps> = ({ data }) => {
  const { imgSrc, alt, title, date, location, type, duration, link } = data;

  return (
    <div className='relative flex h-[411px] w-[328px] flex-col border border-red md:h-[439px] md:w-[334px] xl:h-[485px] xl:w-[384px]'>
      <p className='absolute right-4 top-4 z-10 bg-white p-3 font-unbounded text-[10px] font-bold leading-[15px]'>
        {date}
      </p>
      <div className='relative mb-2 h-[291px] w-full xl:h-[333px]'>
        <Image className='object-cover' src={imgSrc} fill alt={alt} />
      </div>
      <div className='flex-grow'>
        <h2 className='mb-[6px] font-inter text-lightLarge font-bold text-blueDefault'>
          {title}
        </h2>
        <div className='mb-3 flex py-[6px] font-unbounded text-[10px] font-bold leading-[15px] text-darkBlue'>
          <p className='pl-1 pr-2'>{location}</p>
          <p className={clsx('type px-2', s['type'])}>{type}</p>
          <p className='px-2'>{duration}</p>
        </div>
      </div>
      <div className='mb-1'>
        <Link
          className='mt-auto py-2 font-unbounded text-light leading-[21px] text-accentDefaultOrange'
          href={link}
        >
          Детальніше -&gt;
        </Link>
      </div>
    </div>
  );
};

export default TourCard;
