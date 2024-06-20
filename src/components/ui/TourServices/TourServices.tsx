import AnimatedText from '@/components/ui/AnimatedText';
import Title from '@/components/ui/Title';

import { ITourServicesProps } from './TourServices.types';

import Check from '/public/icons/baseline-check.svg';
import Close from '/public/icons/close_24.svg';

const TourServices: React.FC<ITourServicesProps> = ({ data }) => {
  if (!data) {
    return;
  }
  const sortedFeatures = data?.features.sort((a, b) => {
    return Number(b.included) - Number(a.included);
  });

  return (
    <div className='notXL:container'>
      <div>
        <Title className='mb-8 font-unbounded text-[18px] font-bold leading-[1.30] text-additionalBlue md:text-[24px] md:leading-[1] xl:mb-10 xl:text-[32px]'>
          {data.title}
        </Title>
        <ul className='flex flex-col gap-3 xl:gap-4'>
          {sortedFeatures?.map(({ id, name, included }) => (
            <li key={id}>
              <AnimatedText className='flex items-center gap-[6px] md:gap-2 xl:[--x-hidden:-80px]'>
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
              </AnimatedText>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TourServices;
