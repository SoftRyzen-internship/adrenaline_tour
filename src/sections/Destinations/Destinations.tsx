'use client';

import React, { useEffect, useState } from 'react';

import CircleIcon from '/public/icons/circle.svg';

import { ISelectState, ITours } from '@/@types';
import { fetchFilteredTours } from '@/actions/requests';

import ArrowRightDownIcon from '/public/icons/arrow-right_up.svg';

import DropdownList from '@/components/common/DropdownList';
import Button from '@/components/ui/Button';
import CustomSelect from '@/components/ui/CustomSelect';
import ErrorComponent from '@/components/ui/ErrorComponent';
import LinkButton from '@/components/ui/LinkButton';
import TourCard from '@/components/ui/TourCard';
import { selectedTours, destinations } from '@/data';
import {
  getParamsForSelectedTours,
  getFilteringForSelect,
  mapDataToSelectItems,
} from '@/utils';

import { ISelect, IFetchData } from './Destinations.types';

const defaultCountries: ISelect = {
  id: 0,
  attributes: { name: selectedTours.defaultCountries },
};
const defaultActivities: ISelect = {
  id: 0,
  attributes: { name: selectedTours.defaultActivities },
};

const pageSize = 6;

const Destinations: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [tours, setTours] = useState<ITours[]>([]);
  const [selectedCountry, setSelectedCountry] =
    useState<ISelectState>(defaultCountries);
  const [selectedActivity, setSelectedActivity] =
    useState<ISelectState>(defaultActivities);
  const [filteredActivities, setFilteredActivities] = useState<ISelect[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<ISelect[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { country, activity, startDate, endDate } = getParamsForSelectedTours(
    selectedCountry,
    selectedActivity,
    selectedTours.defaultCountries,
    selectedTours.defaultActivities,
  );

  const fetchData: IFetchData = async ({
    defaultSelected,
    selected,
    page,
    pageSize,
    fetchType,
  }) => {
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

      if (data) {
        const selectedForSelected = [selected, defaultSelected];
        if (fetchType === 'countries') {
          setFilteredCountries(selectedForSelected);
        } else {
          setFilteredActivities(selectedForSelected);
        }

        const filteringForSelect = getFilteringForSelect(
          data,
          fetchType,
          defaultActivities,
          defaultCountries,
        );

        if (fetchType === 'countries') {
          setFilteredActivities(filteringForSelect);
        } else {
          setFilteredCountries(filteringForSelect);
        }
      } else {
        throw new Error('Invalid fetchType');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const fetchTheTours = async (page: number) => {
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

      if (data) {
        if (page === 1) {
          setTours(data.tours.data);
          setTotalPages(data.tours.meta.pagination.pageCount);
        } else {
          setTours(prevTours => [...prevTours, ...data.tours.data]);
        }
        let countriesForSelect: ISelect[] = [];
        if (country) {
          fetchData({
            defaultSelected: defaultCountries,
            selected: selectedCountry,
            page: 1,
            pageSize: totalPages * pageSize,
            fetchType: 'countries',
          });
        } else {
          const dataCountries = data.countries.data;
          countriesForSelect = mapDataToSelectItems(
            dataCountries,
            defaultCountries,
          );
        }
        setFilteredCountries(countriesForSelect);

        let activitiesForSelect: ISelect[] = [];
        if (activity) {
          fetchData({
            defaultSelected: defaultActivities,
            selected: selectedActivity,
            page: 1,
            pageSize: totalPages * pageSize,
            fetchType: 'activities',
          });
        } else {
          const dataActivities = data.activities.data;
          activitiesForSelect = mapDataToSelectItems(
            dataActivities,
            defaultActivities,
          );
        }

        setFilteredActivities(activitiesForSelect);

        setCurrentPage(page);
      } else {
        throw new Error('Invalid response structure');
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    fetchTheTours(1);
  }, [selectedCountry, selectedActivity]);

  const loadMore = () => {
    fetchTheTours(currentPage + 1);
  };

  const resetVisibleTours = () => {
    setTours(tours.slice(0, 2));
    setCurrentPage(1);
  };

  return (
    <section id='destinations' className='section container relative'>
      <div className='mb-10 items-center justify-between md:mb-14 xl:mb-16 xl:flex'>
        <h2 className='section-title mb-10 whitespace-break-spaces xl:mb-0'>
          {destinations.title}
        </h2>
        <DropdownList>
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
        </DropdownList>
      </div>

      {isLoading && tours.length === 0 ? (
        <div className='flex h-full items-center justify-center'>
          <CircleIcon width={24} height={24} className='h-6 w-6 animate-spin' />
        </div>
      ) : tours.length > 0 ? (
        <div className='mb-10 grid gap-[32px] md:mb-14 md:grid-cols-2  md:gap-x-[32px] md:gap-y-[40px] xl:mb-16  xl:grid-cols-3'>
          {tours.map((tour, index) => (
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
          tours.length > pageSize && (
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
    </section>
  );
};

export default Destinations;
