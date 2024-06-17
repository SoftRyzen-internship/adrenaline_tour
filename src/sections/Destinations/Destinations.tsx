'use client';

import React, { useCallback, useEffect, useState } from 'react';

import { ISelectState, ITours } from '@/@types';
import { fetchFilteredTours } from '@/actions/requests';
import DropdownList from '@/components/common/DropdownList';
import SelectedTours from '@/components/SelectedTours';
import CustomSelect from '@/components/ui/CustomSelect';
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

const quantityPerPage = 6;

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

  const { country, activity } = getParamsForSelectedTours(
    selectedCountry,
    selectedActivity,
    selectedTours.defaultCountries,
    selectedTours.defaultActivities,
  );

  const allQuantity = totalPages * quantityPerPage;
  const fetchData: IFetchData = async fetchType => {
    try {
      setIsLoading(true);
      const data = await fetchFilteredTours({
        countryName: country,
        activityName: activity,
        page: currentPage,
        pageSize: allQuantity,
      });

      if (data) {
        if (fetchType === 'countries') {
          setFilteredCountries(filteredCountries);
        } else {
          setFilteredActivities(filteredActivities);
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
    } catch (error) {
      console.error('Error fetching tours:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchTheTours = useCallback(
    async (page: number) => {
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
          } else {
            setTours(prevTours => [...prevTours, ...data.tours.data]);
          }

          let countriesForSelect: ISelect[] = [];
          if (
            selectedCountry.attributes.name !== selectedTours.defaultCountries
          ) {
            await fetchData('countries');
          } else {
            const dataCountries = data.countries.data;
            countriesForSelect = mapDataToSelectItems(
              dataCountries,
              defaultCountries,
            );
            setFilteredCountries(countriesForSelect);
          }

          let activitiesForSelect: ISelect[] = [];
          if (
            selectedActivity.attributes.name !== selectedTours.defaultActivities
          ) {
            await fetchData('activities');
          } else {
            const dataActivities = data.activities.data;
            activitiesForSelect = mapDataToSelectItems(
              dataActivities,
              defaultActivities,
            );
            setFilteredActivities(activitiesForSelect);
          }

          setCurrentPage(page);
        } else {
          throw new Error('Invalid response structure');
        }
      } catch (error) {
        console.error('Помилка під час отримання турів:', error);
      } finally {
        setIsLoading(false);
      }
    },
    [
      country,
      activity,
      quantityPerPage,
      selectedCountry,
      selectedActivity,
      fetchData,
    ],
  );

  useEffect(() => {
    setCurrentPage(1);
    fetchTheTours(1);
  }, [fetchTheTours]);

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

      <SelectedTours
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
