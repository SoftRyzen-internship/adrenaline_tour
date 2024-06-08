'use client';

import { useState, useEffect } from 'react';

import CalendarIcon from '/public/icons/date.svg';

import { ITours, Pages } from '@/@types';
import { fetchUpcomingTours } from '@/actions';
import Slider from '@/components/common/Slider';
import LinkButton from '@/components/ui/LinkButton';
import TourCard from '@/components/ui/TourCard';
import { upcomingTours } from '@/data';

const UpcomingTours = () => {
  const [dataUpcomingTours, setDataUpcomingTours] = useState<ITours[]>([]);

  useEffect(() => {
    const getUpcomingTours = async () => {
      try {
        const data = await fetchUpcomingTours();
        if (data) {
          setDataUpcomingTours(data);
        }
      } catch (error) {
        return null;
      }
    };

    getUpcomingTours();
  }, []);

  const shouldShowSlider = dataUpcomingTours.length >= 4;

  const upcomingToursContent = shouldShowSlider ? (
    <Slider
      section='upcomingTours'
      className={'mb-8 md:mb-14'}
      slides={dataUpcomingTours.map(item => ({
        id: item.id,
        content: <TourCard key={item.id} data={item} />,
      }))}
    />
  ) : (
    <div className='mb-8 grid grid-cols-1 gap-2 sm:grid-cols-2 md:mb-14 xl:grid-cols-3'>
      {dataUpcomingTours.map(item => (
        <TourCard key={item.id} data={item} />
      ))}
    </div>
  );

  return (
    <section className='section container'>
      <h2 className='section-title mb-8 w-[206px] md:mb-14 md:w-[478px] xl:mb-12 xl:w-[520px]'>
        {upcomingTours.title}
      </h2>
      {upcomingToursContent}
      <div className='flex justify-center'>
        <LinkButton
          href={Pages.CALENDAR}
          variant='main'
          iconPosition='before'
          icon={
            <CalendarIcon
              width={24}
              height={24}
              className='h-6 w-6 md:h-8 md:w-8'
            />
          }
          className={'w-full md:w-[332px] md:py-[14px]'}
        >
          {upcomingTours.btn}
        </LinkButton>
      </div>
    </section>
  );
};

export default UpcomingTours;
