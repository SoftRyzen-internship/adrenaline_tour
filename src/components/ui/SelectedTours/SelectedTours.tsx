'use client';

import React, { useEffect, useState } from 'react';

import CircleIcon from '/public/icons/circle.svg';

import { ISelectState, ITours } from '@/@types';
import { fetchFilteredTours } from '@/actions/requests';

import ArrowRightDownIcon from '/public/icons/arrow-right_up.svg';

import Button from '@/components/ui/Button';
import CustomSelect from '@/components/ui/CustomSelect';
import LinkButton from '@/components/ui/LinkButton';
import TourCard from '@/components/ui/TourCard';
import { selectedTours } from '@/data';

import ErrorComponent from '../ErrorComponent';

import { ISelect, ISelectedTours } from './SelectedTours.types';

const defaultCountries: ISelect = {
  id: 0,
  attributes: { name: selectedTours.defaultCountries },
};
const defaultActivities: ISelect = {
  id: 0,
  attributes: { name: selectedTours.defaultActivities },
};

const getSortedItems = <T extends ISelectState>(
  items: T[],
  defaultItem: T,
): T[] => {
  const filteredAndSortedItems = items
    .filter(item => item.attributes.name !== defaultItem.attributes.name)
    .sort((a, b) => a.attributes.name.localeCompare(b.attributes.name));
  return [defaultItem, ...filteredAndSortedItems];
};

const SelectedTours: React.FC<ISelectedTours> = ({
  pageSize,
  startDate,
  endDate,
}) => {
  const [visibleTours, setVisibleTours] = useState(pageSize);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filteredTours, setFilteredTours] = useState<ITours[]>([]);
  const [selectedCountry, setSelectedCountry] =
    useState<ISelectState>(defaultCountries);
  const [selectedActivity, setSelectedActivity] =
    useState<ISelectState>(defaultActivities);
  const [filteredActivities, setFilteredActivities] = useState<ISelect[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<ISelect[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (
    page: number,
    pageSize: number,
    fetchType: 'activities' | 'countries',
  ) => {
    const country: string | undefined =
      selectedCountry.attributes.name === selectedTours.defaultCountries
        ? undefined
        : selectedCountry.attributes.name;
    const activity: string | undefined =
      selectedActivity.attributes.name === selectedTours.defaultActivities
        ? undefined
        : selectedActivity.attributes.name;

    try {
      setIsLoading(true);
      const data = await fetchFilteredTours(
        country,
        activity,
        startDate,
        endDate,
        page,
        pageSize,
      );
      setIsLoading(false);

      if (data) {
        if (fetchType === 'countries') {
          const activitiesForSelect = [defaultActivities, selectedActivity];
          setFilteredActivities(activitiesForSelect);

          const uniqueCountries = new Set<string>();
          data.tours.data.forEach(tour => {
            tour.attributes.countries.data.forEach(country => {
              uniqueCountries.add(country.attributes.name);
            });
          });

          const countriesForSelect = [
            defaultCountries,
            ...Array.from(uniqueCountries)
              .sort()
              .map((name, index) => ({
                id: index + 1,
                attributes: { name },
              })),
          ];
          setFilteredCountries(countriesForSelect);
        } else if (fetchType === 'activities') {
          const countriesForSelect = [defaultCountries, selectedCountry];
          setFilteredCountries(countriesForSelect);

          const uniqueActivities = new Set<string>();
          data.tours.data.forEach(tour => {
            tour.attributes.activities.data.forEach(activity => {
              uniqueActivities.add(activity.attributes.name);
            });
          });

          const activitiesForSelect = [
            defaultActivities,
            ...Array.from(uniqueActivities)
              .sort()
              .map((name, index) => ({
                id: index + 1,
                attributes: { name },
              })),
          ];
          setFilteredActivities(activitiesForSelect);
        } else {
          throw new Error('Invalid fetchType');
        }
      } else {
        throw new Error('Invalid response structure');
      }
    } catch (error) {
      setIsLoading(false);
      console.error('Error fetching tours:', error);
    }
  };

  const fetchTheTours = async (page: number) => {
    const startDate: Date | undefined = undefined;
    const endDate: Date | undefined = undefined;
    const country: string | undefined =
      selectedCountry.attributes.name === selectedTours.defaultCountries
        ? undefined
        : selectedCountry.attributes.name;
    const activity: string | undefined =
      selectedActivity.attributes.name === selectedTours.defaultActivities
        ? undefined
        : selectedActivity.attributes.name;
    try {
      setIsLoading(true);
      const data = await fetchFilteredTours(
        country,
        activity,
        startDate,
        endDate,
        page,
        pageSize,
      );
      setIsLoading(false);

      if (data) {
        if (page === 1) {
          setFilteredTours(data.tours.data);
          setTotalPages(data.tours.meta.pagination.pageCount);
          setVisibleTours(data.tours.data.length);
        } else {
          setFilteredTours(prevFilteredTours => [
            ...prevFilteredTours,
            ...data.tours.data,
          ]);
          setVisibleTours(
            prevVisibleTours => prevVisibleTours + data.tours.data.length,
          );
        }

        let countriesForSelect: ISelect[] = [defaultCountries];
        if (country) {
          fetchData(1, totalPages * pageSize, 'activities');
        } else {
          countriesForSelect = [
            ...countriesForSelect,
            ...data.countries.data.map((country, index) => ({
              id: index + 1,
              attributes: { name: country.attributes.name },
            })),
          ];
        }

        setFilteredCountries(
          getSortedItems(countriesForSelect, defaultCountries),
        );

        let activitiesForSelect: ISelect[] = [defaultActivities];
        if (activity) {
          fetchData(1, totalPages * pageSize, 'countries');
        } else {
          activitiesForSelect = [
            ...activitiesForSelect,
            ...data.activities.data.map((activity, index) => ({
              id: index + 1,
              attributes: { name: activity.attributes.name },
            })),
          ];
        }

        setFilteredActivities(
          getSortedItems(activitiesForSelect, defaultActivities),
        );

        setCurrentPage(page);
      } else {
        throw new Error('Invalid response structure');
      }
    } catch (error) {
      setIsLoading(false);
      console.error('Error fetching tours:', error);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    fetchTheTours(1);
  }, [selectedCountry, selectedActivity, startDate, endDate]);

  const loadMore = () => {
    fetchTheTours(currentPage + 1);
  };

  const resetVisibleTours = () => {
    setVisibleTours(pageSize);
    setCurrentPage(1);
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
        {totalPages > currentPage ? (
          <Button
            className='w-full px-[16px] md:w-[176px] md:px-[28px]'
            variant='main'
            type='button'
            iconPosition='after'
            icon={
              isLoading ? (
                <CircleIcon
                  width={24}
                  height={24}
                  className='h-6 w-6 animate-spin'
                />
              ) : (
                <ArrowRightDownIcon
                  width={24}
                  height={24}
                  className='h-6 w-6 md:h-8 md:w-8'
                />
              )
            }
            onClick={loadMore}
            disabled={isLoading}
          >
            {selectedTours.buttonMore}
          </Button>
        ) : (
          visibleTours > pageSize && (
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
          )
        )}
      </div>
    </>
  );
};

export default SelectedTours;
