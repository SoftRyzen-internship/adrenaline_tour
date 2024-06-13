import { ITourProps } from '@/@types';

import Location from '/public/icons/location.svg';

import { fetchTourMainInfo } from '@/actions/requests';

const TourMainInfo: React.FC<ITourProps> = async ({ slug }) => {
  const data = await fetchTourMainInfo(slug);
  const dataMainInfo = data ?? [];
  const { title, duration, description, countries, activities } = dataMainInfo;

  const countryNames = countries?.data
    .map(country => country.attributes.name)
    .join(', ');
  const activitiesNames = activities?.data
    .map(activity => activity.attributes.name)
    .join(', ');

  return (
    <div className='notXL:container'>
      {data && (
        <div className='xl:w-[652px]'>
          <h1 className='mb-3 font-unbounded text-[28px] font-bold leading-[1] text-additionalBlue md:mb-4 md:text-[32px] xl:text-[40px]'>
            {title}
          </h1>
          <div className='mb-6 flex h-[26px] items-center font-inter text-[14px] leading-[1.30] text-blueDefault md:mb-8 md:h-[34px] md:text-[18px] md:leading-[1.50] xl:text-[20px] xl:leading-[1.30]'>
            <Location
              width={14}
              height={14}
              className='fill-blueDefault md:h-[18px] md:w-[18px] xl:h-[22px] xl:w-[22px]'
            />
            <p className='pl-1 pr-2 md:pl-[6px] md:pr-3'>
              {countryNames}
              <span className='pl-2 text-blue32 md:pl-3'>|</span>
            </p>
            <p className=''>
              {activitiesNames}
              <span className='pl-2 text-blue32 md:pl-3'>|</span>
            </p>
            <p className='pl-2 md:pl-3'>{duration}</p>
          </div>
          <p className='text-textDefault mb-12 font-inter text-[14px] leading-[1.30] md:text-[16px] md:leading-[1.40] xl:text-[18px] xl:leading-[1.50]'>
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

export default TourMainInfo;
