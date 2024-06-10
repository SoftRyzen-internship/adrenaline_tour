'use client';

import React, { useState } from 'react';

import ArrowRightDownIcon from '/public/icons/arrow-right_up.svg';

import Button from '@/components/ui/Button';
import LinkButton from '@/components/ui/LinkButton';
import TourCard from '@/components/ui/TourCard';
import { destinations } from '@/data';

const Destinations: React.FC = () => {
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

  console.log('Country Filter:', countryFilter);
  console.log('Activity Filter:', activityFilter);

  const filteredTours = destinations.cards.filter(item => {
    const countryMatch = countryFilter
      ? item.countries.data.attributes.name === countryFilter
      : true;
    const activityMatch = activityFilter
      ? item.activities.data.attributes.name.includes(activityFilter)
      : true;
    return countryMatch && activityMatch;
  });

  const uniqueCountries = Array.from(
    new Set(
      destinations.cards.map(item => item.countries.data.attributes.name),
    ),
  );

  const uniqueActivities = Array.from(
    new Set(
      destinations.cards.flatMap(item => item.activities.data.attributes.name),
    ),
  );

  const filteredCountries = activityFilter
    ? Array.from(
        new Set(
          destinations.cards
            .filter(item =>
              item.activities.data.attributes.name.includes(activityFilter),
            )
            .map(item => item.countries.data.attributes.name),
        ),
      )
    : uniqueCountries;

  const filteredActivities = countryFilter
    ? Array.from(
        new Set(
          destinations.cards
            .filter(
              item => item.countries.data.attributes.name === countryFilter,
            )
            .flatMap(item => item.activities.data.attributes.name),
        ),
      )
    : uniqueActivities;

  return (
    <section id='destinations' className='section'>
      <div className='container'>
        <div className='flex items-center '>
          <h2 className='section-title mb-10 xl:mb-0'>{destinations.title}</h2>

          <div className='mb-4 flex gap-4'>
            <select
              value={countryFilter}
              onChange={handleCountryChange}
              className='h-10 rounded-md border border-gray-300 px-4 py-2'
            >
              <option value=''>Всі країни</option>
              {filteredCountries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>

            <select
              value={activityFilter}
              onChange={handleActivityChange}
              className='h-10 rounded-md border border-gray-300 px-4 py-2'
            >
              <option value=''>Всі активності</option>
              {filteredActivities.map((activity, index) => (
                <option key={index} value={activity}>
                  {activity}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className='my-10 grid gap-[16px] md:my-14 md:grid-cols-2 md:gap-[32px] xl:my-16 xl:grid-cols-3 xl:gap-[28px]'>
          {filteredTours.slice(0, visibleTours).map(item => (
            <div key={item.id} className='col-span-1'>
              <TourCard data={item} />
            </div>
          ))}
        </div>

        <div className='flex justify-center'>
          {filteredTours.length > 6 &&
            (visibleTours < filteredTours.length ? (
              <Button
                className='w-full px-[16px] md:w-[176px] md:px-[28px]'
                variant='main'
                type='button'
                iconPosition='after'
                icon={
                  <ArrowRightDownIcon
                    width={24}
                    height={24}
                    className='h-6 w-6 md:h-8 md:w-8'
                  />
                }
                onClick={loadMore}
              >
                {destinations.buttonMore}
              </Button>
            ) : (
              <LinkButton
                className='w-full px-[16px] md:w-[199px] md:px-[28px]'
                variant='main'
                iconPosition='after'
                icon={
                  <ArrowRightDownIcon
                    width={24}
                    height={24}
                    className='h-6 w-6 md:h-8 md:w-8'
                  />
                }
                toScroll
                to='destinations'
                onClick={resetVisibleTours}
              >
                {destinations.buttonLess}
              </LinkButton>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
