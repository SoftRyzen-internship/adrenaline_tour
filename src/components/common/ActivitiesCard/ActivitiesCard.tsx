import clsx from 'clsx';
import Image from 'next/image';

import s from './ActivitiesCard.module.css';
import { IActivitiesCardProp } from './ActivitiesCard.types';

const getContainerClasses = (id: number) => {
  return clsx(
    'relative flex',
    id % 2 !== 0
      ? 'w-[156px] md:w-[334px] xl:w-[594px]'
      : 'w-[140px] md:w-[300px] xl:w-[450px]',
  );
};

const ActivitiesCard: React.FC<IActivitiesCardProp> = ({
  id,
  position,
  src,
  alt,
  text,
}) => {
  const containerClasses = getContainerClasses(id);

  return (
    <div key={id} className={clsx('flex', position)}>
      <div className={containerClasses}>
        <Image className='object-cover' src={src} alt={alt} fill sizes='50vw' />

        <div
          className={clsx(
            'absolute bottom-0 left-0 right-0 top-0 z-10',
            s.gradient,
          )}
        ></div>
        <div className='absolute bottom-0 left-0 right-0 top-0 z-20 flex flex-col justify-end p-2 text-xl font-bold text-white md:p-6 xl:p-8'>
          <p className='w-[140px] text-[14px] font-bold uppercase leading-[110%] text-white md:w-[280px] md:text-[24px] xl:w-[460px] xl:text-[40px]'>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesCard;
