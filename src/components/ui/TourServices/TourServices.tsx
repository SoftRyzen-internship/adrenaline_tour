import Check from '/public/icons/baseline-check.svg';
import Close from '/public/icons/close_24.svg';

import { ITourServices } from './TourServices.types';

const TourServices: React.FC<ITourServices> = ({ dataServices }) => {
  const { services } = dataServices;

  const sortedFeatures = [...services.features].sort((a, b) => {
    return b.included - a.included;
  });

  return (
    <div className='container'>
      <div className='mb-6 md:mb-8 xl:mb-10'>
        <h2 className='mb-8 font-unbounded text-[18px] font-bold leading-[1.30] text-additionalBlue md:text-[24px] md:leading-[1] xl:mb-10 xl:text-[32px]'>
          {services.title}
        </h2>
        <ul className='flex flex-col gap-3 xl:gap-4'>
          {sortedFeatures.map(({ id, name, included }) => (
            <li key={id} className='flex items-center gap-[6px] md:gap-2'>
              {included ? (
                <Check
                  width={18}
                  height={18}
                  className='xl:h-[24px] xl:w-[24px]'
                />
              ) : (
                <Close
                  width={18}
                  height={18}
                  className='stroke-accentDefaultOrange xl:h-[24px] xl:w-[24px]'
                />
              )}
              <p className='font-inter text-[14px] font-medium leading-[1.30] text-dark md:text-[18px] md:font-bold md:leading-[1.50] xl:text-[20px] xl:leading-[1.30]'>
                {name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TourServices;
