import { ITourRent } from './TourRent.types';

const TourRent: React.FC<ITourRent> = ({ dataRent }) => {
  const { rent } = dataRent;

  return (
    <div className='container'>
      <div className='pb-10 md:pb-[60px] xl:pb-20'>
        <h3 className='mb-3 font-inter text-[16px] font-bold leading-[1.30] text-blueDefault md:mb-4 md:text-[20px] xl:mb-6 xl:text-[28px] xl:leading-[1.10]'>
          {rent.title}
        </h3>
        <p className='font-inter text-[14px] font-medium leading-[1.30] text-dark md:text-[18px] md:font-bold md:leading-[1.50] xl:text-[20px] xl:leading-[1.30]'>
          {rent.equipment}
        </p>
      </div>
    </div>
  );
};

export default TourRent;
