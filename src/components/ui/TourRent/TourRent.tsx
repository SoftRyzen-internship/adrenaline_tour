import Title from '@/components/ui/Title';

import { ITourRentProps } from './TourRent.types';
const TourRent: React.FC<ITourRentProps> = ({ data }) => {
  if (!data) {
    return;
  }

  return (
    <div className='notXL:container'>
      {data.equipment && (
        <div className='mt-6 md:mt-8 xl:mt-10'>
          <Title className='mb-3 font-inter text-[16px] font-bold leading-[1.30] text-blueDefault md:mb-4 md:text-[20px] xl:mb-6 xl:text-[28px] xl:leading-[1.10]'>
            {data.title}
          </Title>
          <p className='font-inter text-[14px] font-medium leading-[1.30] text-dark md:text-[18px] md:font-bold md:leading-[1.50] xl:text-[20px] xl:leading-[1.30]'>
            {data.equipment}
          </p>
        </div>
      )}
    </div>
  );
};

export default TourRent;
