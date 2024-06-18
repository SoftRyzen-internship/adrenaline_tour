'use client';

import React, { useEffect, useState } from 'react';

import { ISelectState, ITours } from '@/@types';
import { fetchFilteredTours } from '@/actions/requests';
import DropdownList from '@/components/common/DropdownList';
import ToursGrid from '@/components/ToursGrid';
import CustomSelect from '@/components/ui/CustomSelect';
import { selectedTours, destinations } from '@/data';
import {
  getParamsForSelectedTours,
  getFilteringForSelect,
  mapDataToSelectItems,
} from '@/utils';

import { IFetchData, ISetSelectsList } from './Destinations.types';

const defaultCountries: ISelectState = {
  id: 0,
  attributes: { name: selectedTours.defaultCountries },
};
const defaultActivities: ISelectState = {
  id: 0,
  attributes: { name: selectedTours.defaultActivities },
};

const quantityPerPage = 6;

const Destinations: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [tours, setTours] = useState<ITours[]>([]);
  const [selectedCountry, setSelectedCountry] =
    useState<ISelectState>(defaultCountries);
  const [selectedActivity, setSelectedActivity] =
    useState<ISelectState>(defaultActivities);
  const [filteredActivities, setFilteredActivities] = useState<ISelectState[]>(
    [],
  );
  const [filteredCountries, setFilteredCountries] = useState<ISelectState[]>(
    [],
  );
  const [isLoading, setIsLoading] = useState(true);

  const { country, activity } = getParamsForSelectedTours(
    selectedCountry,
    selectedActivity,
    selectedTours.defaultCountries,
    selectedTours.defaultActivities,
  );

  const allQuantity = totalPages * quantityPerPage;

  const fetchSelectsList: IFetchData = async fetchType => {
    try {
      setIsLoading(true);
      const data = await fetchFilteredTours({
        countryName: country,
        activityName: activity,
        page: currentPage,
        pageSize: allQuantity,
      });

      if (data) {
        fetchType === 'countries'
          ? setFilteredCountries(filteredCountries)
          : setFilteredActivities(filteredActivities);

        const filteringForSelect = getFilteringForSelect(
          data,
          fetchType,
          defaultActivities,
          defaultCountries,
        );

        fetchType === 'countries'
          ? setFilteredActivities(filteringForSelect)
          : setFilteredCountries(filteringForSelect);
      } else {
        throw new Error('Invalid fetchType');
      }
    } catch (error) {
      console.error('Error fetching tours:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const setSelectsList: ISetSelectsList = (data, country, activity) => {
    let countriesForSelect: ISelectState[] = [];
    if (country) {
      fetchSelectsList('countries');
    } else {
      const dataCountries = data.countries.data;
      countriesForSelect = mapDataToSelectItems(
        dataCountries,
        defaultCountries,
      );
    }
    setFilteredCountries(countriesForSelect);

    let activitiesForSelect: ISelectState[] = [];
    if (activity) {
      fetchSelectsList('activities');
    } else {
      const dataActivities = data.activities.data;
      activitiesForSelect = mapDataToSelectItems(
        dataActivities,
        defaultActivities,
      );
    }

    setFilteredActivities(activitiesForSelect);
  };

  const fetchTheTours = async (page: number) => {
    try {
      setIsLoading(true);
      const data = await fetchFilteredTours({
        countryName: country,
        activityName: activity,
        page: page,
        pageSize: quantityPerPage,
      });

      if (data) {
        if (page === 1) {
          setTours(data.tours.data);
          setTotalPages(data.tours.meta.pagination.pageCount);
          setSelectsList(data, country, activity);
        } else {
          setTours(prevTours => [...prevTours, ...data.tours.data]);
        }

        setCurrentPage(page);
      } else {
        throw new Error('Invalid response structure');
      }
    } catch (error) {
      console.error('Error fetching tours:', error);
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
    <section id='destinations' className='section container'>
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

      <ToursGrid
        isLoading={isLoading}
        tours={tours}
        totalPages={totalPages}
        currentPage={currentPage}
        quantityPerPage={quantityPerPage}
        loadMore={loadMore}
        resetVisibleTours={resetVisibleTours}
      />
    </section>
  );
};

export default Destinations;
