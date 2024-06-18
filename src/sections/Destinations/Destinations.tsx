'use client';

import { useState, useEffect, useCallback } from 'react';

import { ISelectState, ITours } from '@/@types';
import { IFilters } from '@/@types';
import { fetchFilteredTours } from '@/actions/requests';
import DropdownList from '@/components/common/DropdownList';
import CustomSelect from '@/components/ui/CustomSelect';
import ToursList from '@/components/ui/ToursList';
import { selectedTours, destinations } from '@/data';
import { createDataSelectOptions } from '@/utils';

const defaultActivity: ISelectState = {
  id: -1,
  attributes: { name: selectedTours.defaultActivity },
};
const defaultCountry: ISelectState = {
  id: -1,
  attributes: { name: selectedTours.defaultCountry },
};

const PER_PAGE = 6;

const Destinations = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [tours, setTours] = useState<ITours[]>([]);
  const [countries, setCountries] = useState<ISelectState[] | null>(null);
  const [activities, setActivities] = useState<ISelectState[] | null>(null);
  const [selectedActivitiesItem, setSelectedActivitiesItem] =
    useState<ISelectState>(defaultActivity);
  const [selectedCountryItem, setSelectedCountryItem] =
    useState<ISelectState>(defaultCountry);
  const [isLoading, setIsLoading] = useState(false);
  const [filtersChanged, setFiltersChanged] = useState(false);

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const resetVisibleTours = () => {
    setTours(tours.slice(0, PER_PAGE));
    setPage(1);
  };

  const fetchData = useCallback(
    async (filters: IFilters = {}) => {
      try {
        setIsLoading(true);
        const data = await fetchFilteredTours(filters);
        if (page === 1) {
          setTours(data.tours.data);
        } else {
          setTours(prevTours => [...prevTours, ...data.tours.data]);
        }

        if (page === 1) {
          setActivities(data.activities.data);
          setCountries(data.countries.data);
        }
        setTotalPages(data.tours.meta.pagination.pageCount);
      } catch (error) {
        console.error('Error fetching tours:', error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    },
    [page],
  );

  useEffect(() => {
    const filters: IFilters = {
      pageSize: PER_PAGE,
      page: page,
    };

    if (selectedActivitiesItem?.id !== -1) {
      filters.activityName = selectedActivitiesItem?.attributes.name;
      setTours([]);
      setPage(1);
      setFiltersChanged(true);
    }
    if (selectedCountryItem?.id !== -1) {
      filters.countryName = selectedCountryItem?.attributes.name;
      setTours([]);
      setPage(1);
      setFiltersChanged(true);
    }

    fetchData(filters);
  }, [selectedActivitiesItem, selectedCountryItem, page, fetchData]);

  return (
    <section id='destinations' className='section container'>
      <div className='mb-10 items-center justify-between md:mb-14 xl:mb-16 xl:flex'>
        <h2 className='section-title mb-10 whitespace-break-spaces xl:mb-0'>
          {destinations.title}
        </h2>

        <DropdownList>
          {activities && (
            <CustomSelect
              data={createDataSelectOptions(
                activities,
                selectedTours.defaultActivity,
              )}
              selectedItem={selectedActivitiesItem}
              onChange={setSelectedActivitiesItem}
            />
          )}
          {countries && (
            <CustomSelect
              data={createDataSelectOptions(
                countries,
                selectedTours.defaultCountry,
              )}
              selectedItem={selectedCountryItem}
              onChange={setSelectedCountryItem}
            />
          )}
        </DropdownList>
      </div>

      <ToursList
        isLoading={isLoading}
        tours={tours}
        totalPages={totalPages}
        currentPage={page}
        quantityPerPage={PER_PAGE}
        loadMore={loadMore}
        resetVisibleTours={resetVisibleTours}
        filtersChanged={filtersChanged}
      />
    </section>
  );
};

export default Destinations;
