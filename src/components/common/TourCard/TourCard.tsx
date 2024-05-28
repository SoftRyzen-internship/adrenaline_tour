import Image from 'next/image';
import Link from 'next/link';

import { ITourCardProps } from './TourCard.types';

const TourCard: React.FC<ITourCardProps> = ({ data }) => {
  const { imgSrc, alt, title, date, location, type, duration, link } = data;

  return (
    <div className='relative flex h-[441px] w-[328px] flex-col border border-red md:h-[439px] md:w-[334px] xl:h-[485px] xl:w-[384px]'>
      <p className='absolute right-4 top-4 z-10 bg-white px-2 py-[7.5px]'>
        {date}
      </p>
      <div className='relative mb-2 h-[291px] w-full xl:h-[333px]'>
        <Image className='object-cover' src={imgSrc} fill alt={alt} />
      </div>
      <div className='flex-grow'>
        <h2 className='text-inter mb-[6px] text-lightLarge font-bold text-blueDefault'>
          {title}
        </h2>
        <div className='flex'>
          <p>{location}</p>
          <p>{type}</p>
          <p>{duration}</p>
        </div>
      </div>
      <div className='mb-1'>
        <Link className='mt-auto text-accentDefaultOrange' href={link}>
          Детальніше -&gt;
        </Link>
      </div>
    </div>
  );
};

export default TourCard;
