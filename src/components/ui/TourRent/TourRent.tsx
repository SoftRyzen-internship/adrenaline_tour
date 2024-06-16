import { ITourProps } from '@/@types';
import { fetchTourRent } from '@/actions/requests';

const TourRent: React.FC<ITourProps> = async ({ slug }) => {
  const data = await fetchTourRent(slug);

  if (!data) {
    return;
  }

  return (
    <div className='notXL:container'>
      {data.equipment && (
        <div className='mt-6 md:mt-8 xl:mt-10'>
          <h3 className='mb-3 font-inter text-[16px] font-bold leading-[1.30] text-blueDefault md:mb-4 md:text-[20px] xl:mb-6 xl:text-[28px] xl:leading-[1.10]'>
            {data.title}
          </h3>
          <p className='font-inter text-[14px] font-medium leading-[1.30] text-dark md:text-[18px] md:font-bold md:leading-[1.50] xl:text-[20px] xl:leading-[1.30]'>
            {data.equipment}
          </p>
        </div>
      )}
    </div>
  );
};

export default TourRent;
