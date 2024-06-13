'use client';

import React, { useEffect, useState } from 'react';

import { ISelectState } from '@/@types';
import { fetchAllTours } from '@/actions/requests';

import ArrowRightDownIcon from '/public/icons/arrow-right_up.svg';

import Button from '@/components/ui/Button';
import CustomSelect from '@/components/ui/CustomSelect';
import LinkButton from '@/components/ui/LinkButton';
import TourCard from '@/components/ui/TourCard';
import { selectedTours } from '@/data';

import ErrorComponent from '../ErrorComponent';

import { ITour } from './SelectedTours.types';

const SelectedTours = () => {
  const [visibleTours, setVisibleTours] = useState(6);
  const [tours, setTours] = useState<ITour[]>([]);
  const [filteredTours, setFilteredTours] = useState<ITour[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<ISelectState>({
    id: 0,
    attributes: { name: 'Всі країни' },
  });
  const [selectedActivity, setSelectedActivity] = useState<ISelectState>({
    id: 0,
    attributes: { name: 'Всі активності' },
  });
  const [filteredActivities, setFilteredActivities] = useState<ISelectState[]>(
    [],
  );
  const [filteredCountries, setFilteredCountries] = useState<ISelectState[]>(
    [],
  );

  const fetchTheTours = async () => {
    try {
      const data = await fetchAllTours();
      if (data) {
        setTours(data);
        setFilteredTours(data);
      } else {
        throw new Error('Invalid response structure');
      }
    } catch (error) {
      console.error('Error fetching tours:', error);
    }
  };

  // const fetchData = async () => {
  //   try {
  //     const fetchedCountries = await fetchCountries();
  //     const fetchedActivities = await fetchActivities();

  //     const countryNames = fetchedCountries.map(
  //       country => country.attributes.name,
  //     );
  //     const updatedCountries = countryNames.map((name, index) => ({
  //       id: index + 1,
  //       attributes: { name },
  //     }));
  //     updatedCountries.unshift({ id: 0, attributes: { name: 'Всі країни' } });
  //     setFilteredCountries(updatedCountries);

  //     const activitieNames = fetchedActivities.map(
  //       activity => activity.attributes.name,
  //     );
  //     const updatedActivities = activitieNames.map((name, index) => ({
  //       id: index + 1,
  //       attributes: { name },
  //     }));
  //     updatedActivities.unshift({
  //       id: 0,
  //       attributes: { name: 'Всі активності' },
  //     });
  //     setFilteredActivities(updatedActivities);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  useEffect(() => {
    fetchTheTours();
  }, []);

  useEffect(() => {
    setFilteredTours(filterTours(tours));
    updateFilteredActivities();
    updateFilteredCountries();
  }, [selectedCountry, selectedActivity, tours]);

  const updateFilteredActivities = () => {
    let activities: string[] = [];

    if (selectedCountry.attributes.name === 'Всі країни') {
      activities = tours.flatMap(tour =>
        tour.attributes.activities.data.map(
          activity => activity.attributes.name,
        ),
      );
    } else {
      const toursInSelectedCountry = tours.filter(tour =>
        tour.attributes.countries.data.some(
          country =>
            country.attributes.name === selectedCountry.attributes.name,
        ),
      );
      activities = toursInSelectedCountry.flatMap(tour =>
        tour.attributes.activities.data.map(
          activity => activity.attributes.name,
        ),
      );
    }

    const uniqueActivities = Array.from(new Set(activities)).sort((a, b) =>
      a.localeCompare(b),
    );
    const updatedActivities = uniqueActivities.map((name, index) => ({
      id: index + 1,
      attributes: { name },
    }));

    updatedActivities.unshift({
      id: 0,
      attributes: { name: 'Всі активності' },
    });

    setFilteredActivities(updatedActivities);
  };

  const updateFilteredCountries = () => {
    let countries: string[] = [];

    if (selectedActivity.attributes.name === 'Всі активності') {
      countries = tours.flatMap(tour =>
        tour.attributes.countries.data.map(country => country.attributes.name),
      );
    } else {
      const toursWithSelectedActivity = tours.filter(tour =>
        tour.attributes.activities.data.some(
          activity =>
            activity.attributes.name === selectedActivity.attributes.name,
        ),
      );
      countries = toursWithSelectedActivity.flatMap(tour =>
        tour.attributes.countries.data.map(country => country.attributes.name),
      );
    }

    const uniqueCountries = Array.from(new Set(countries)).sort((a, b) =>
      a.localeCompare(b),
    );
    const updatedCountries = uniqueCountries.map((name, index) => ({
      id: index + 1,
      attributes: { name },
    }));

    updatedCountries.unshift({ id: 0, attributes: { name: 'Всі країни' } });

    setFilteredCountries(updatedCountries);
  };

  const filterTours = (tours: ITour[]) => {
    let newFilteredTours = [...tours];

    if (selectedCountry.attributes.name !== 'Всі країни') {
      newFilteredTours = newFilteredTours.filter(tour =>
        tour.attributes.countries.data
          .map(country => country.attributes.name)
          .includes(selectedCountry.attributes.name),
      );
    }

    if (selectedActivity.attributes.name !== 'Всі активності') {
      newFilteredTours = newFilteredTours.filter(tour =>
        tour.attributes.activities.data
          .map(activity => activity.attributes.name)
          .includes(selectedActivity.attributes.name),
      );
    }

    return newFilteredTours;
  };

  const loadMore = () => {
    setVisibleTours(prev => prev + 6);
  };

  const resetVisibleTours = () => {
    setVisibleTours(6);
  };

  return (
    <>
      <div className='right-8 top-[118px] mb-4 flex flex-col gap-3 md:flex-row md:gap-4 xl:absolute xl:mb-0 xl:gap-3'>
        <CustomSelect
          data={filteredActivities}
          selectedItem={selectedActivity}
          onChange={(item: ISelectState) => setSelectedActivity(item)}
        />
        <CustomSelect
          data={filteredCountries}
          selectedItem={selectedCountry}
          onChange={(item: ISelectState) => setSelectedCountry(item)}
        />
      </div>
      {filteredTours.length > 0 ? (
        <div className='my-10 grid gap-[32px] md:my-14 md:grid-cols-2 md:gap-x-[32px] md:gap-y-[40px] xl:my-16 xl:grid-cols-3'>
          {filteredTours.slice(0, visibleTours).map((tour, index) => (
            <div key={index} className='col-span-1'>
              <TourCard data={tour} />
            </div>
          ))}
        </div>
      ) : (
        <ErrorComponent />
      )}

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
              {selectedTours.buttonMore}
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
              {selectedTours.buttonLess}
            </LinkButton>
          ))}
      </div>
    </>
  );
};

export default SelectedTours;
