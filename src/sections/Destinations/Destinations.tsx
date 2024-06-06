'use client';

import { useState } from 'react';

import ArrowRightDownIcon from '/public/icons/arrow-right_up.svg';

import Button from '@/components/ui/Button';
import LinkButton from '@/components/ui/LinkButton';
import TourCard from '@/components/ui/TourCard';
import { destinations } from '@/data';

const Destinations = () => {
  const [visibleTours, setVisibleTours] = useState(6);

  const [countryFilter, setCountryFilter] = useState('');
  const [activityFilter, setActivityFilter] = useState('');

  const loadMore = () => {
    setVisibleTours(prev => prev + 6);
  };

  const resetVisibleTours = () => {
    setVisibleTours(6);
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCountryFilter(event.target.value);
    resetVisibleTours();
  };

  const handleActivityChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setActivityFilter(event.target.value);
    resetVisibleTours();
  };

  const filteredTours = destinations.cards.filter(item => {
    const countryMatch = countryFilter ? item.location === countryFilter : true;
    const activityMatch = activityFilter ? item.alt === activityFilter : true;
    return countryMatch && activityMatch;
  });

  const uniqueCountries = Array.from(
    new Set(destinations.cards.map(item => item.location)),
  );
  const uniqueActivities = Array.from(
    new Set(destinations.cards.map(item => item.alt)),
  );

  return (
    <section id='destinations' className='section'>
      <div className='container'>
        <div>
          <h2 className='section-title mb-[38px] md:mb-16  xl:mb-[69px] '>
            {destinations.title}
          </h2>

          <div className='mb-4 flex gap-4'>
            <select
              value={countryFilter}
              onChange={handleCountryChange}
              className='rounded-md border border-gray-300 px-4 py-2'
            >
              <option value=''>Всі країни</option>
              {uniqueCountries.map(country => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>

            <select
              value={activityFilter}
              onChange={handleActivityChange}
              className='rounded-md border border-gray-300 px-4 py-2'
            >
              <option value=''>Всі активності</option>
              {uniqueActivities.map(activity => (
                <option key={activity} value={activity}>
                  {activity}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className='grid gap-[16px] md:grid-cols-2 md:gap-[32px] xl:grid-cols-3 xl:gap-[28px]'>
          {filteredTours.slice(0, visibleTours).map(item => (
            <div key={item.id} className='col-span-1'>
              <TourCard data={item} />
            </div>
          ))}
        </div>

        <div className='mt-4 flex justify-center'>
          {filteredTours.length > 6 &&
            (visibleTours < filteredTours.length ? (
              <Button
                variant='main'
                type='button'
                iconPosition='after'
                icon={
                  <ArrowRightDownIcon
                    width={24}
                    height={24}
                    className='h-6 w-6'
                  />
                }
                onClick={loadMore}
              >
                Завантажити ще
              </Button>
            ) : (
              <LinkButton
                variant='main'
                iconPosition='after'
                icon={
                  <ArrowRightDownIcon
                    width={24}
                    height={24}
                    className='h-6 w-6'
                  />
                }
                toScroll='destinations'
                onClick={resetVisibleTours}
              >
                Сховати
              </LinkButton>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
