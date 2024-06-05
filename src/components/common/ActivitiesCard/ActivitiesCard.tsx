import clsx from 'clsx';
import Image from 'next/image';

import s from './ActivitiesCard.module.css';
import { IActivitiesCardProp } from './ActivitiesCard.types';

const ActivitiesCard: React.FC<IActivitiesCardProp> = ({
  id,
  position,
  src,
  alt,
  width,
  height,
  sizes,
  text,
}) => {
  return (
    <div key={id} className={`flex ${position}`}>
      {/* w-[156px] sm:w-[334px] xl:w-[600px] */}
      {/* "header640.png 640w, header960.png 960w, header1024.png 1024w" */}
      <div
        className={clsx('relative', {
          'pl-[40px]': id === 2,
          'pr-[40px]': id === 4 || id === 6,
        })}
      >
        <Image
          className='object-contain'
          src={src.lg}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
        />
        <div
          className={`absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-end text-xl font-bold text-white ${s.gradient} xl:p-[32px]`}
        >
          <p className='w-[140px] text-[14px] font-bold uppercase leading-[110%] text-white md:w-[286px] md:text-[24px] xl:w-[460px] xl:text-[40px]'>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesCard;
