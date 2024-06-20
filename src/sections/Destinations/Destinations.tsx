'use client';

import { useState, useEffect, useCallback } from 'react';

import { ISelectState, ITours } from '@/@types';
import { Pages, IFilters } from '@/@types';
import { fetchFilteredTours } from '@/actions/requests';
import DropdownList from '@/components/common/DropdownList';
import AnimatedText from '@/components/ui/AnimatedText';
import CustomSelect from '@/components/ui/CustomSelect';
import Title from '@/components/ui/Title';
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
  const [tours, setTours] = useState<ITours[]>([]);
  const [countries, setCountries] = useState<ISelectState[]>([]);
  const [activities, setActivities] = useState<ISelectState[]>([]);
  const [selectedActivitiesItem, setSelectedActivitiesItem] =
    useState<ISelectState>(defaultActivity);
  const [selectedCountryItem, setSelectedCountryItem] =
    useState<ISelectState>(defaultCountry);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadMore, setIsLoadMore] = useState(false);
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
        const totalPage = data.tours.meta.pagination.pageCount;
        totalPage > page ? setIsLoadMore(true) : setIsLoadMore(false);
      } catch (error) {
        console.error('Error fetching tours:', error);
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

    if (selectedActivitiesItem?.id !== -1 && selectedCountryItem?.id !== -1) {
      setPage(1);
    }
    if (selectedActivitiesItem?.id !== -1) {
      filters.activityName = selectedActivitiesItem?.attributes.name;

      setFiltersChanged(true);
    }
    if (selectedCountryItem?.id !== -1) {
      filters.countryName = selectedCountryItem?.attributes.name;

      setFiltersChanged(true);
    }

    fetchData(filters);
  }, [selectedActivitiesItem, selectedCountryItem, page, fetchData]);

  const handleActivityChange = (newActivity: ISelectState) => {
    setSelectedActivitiesItem(newActivity);
    setPage(1);
    setTours([]);
    setIsLoadMore(false);
  };

  const handleCountryChange = (newCountry: ISelectState) => {
    setSelectedCountryItem(newCountry);
    setPage(1);
    setTours([]);
    setIsLoadMore(false);
  };

  return (
    <section id={Pages.DESTINATIONS} className='section container'>
      <div className='mb-10 items-center justify-between md:mb-14 xl:mb-16 xl:flex'>
        <Title className='section-title mb-10 whitespace-break-spaces xl:mb-0'>
          {destinations.title}
        </Title>

        <AnimatedText className='xl:[--x-hidden:80px]'>
          <DropdownList>
            {activities && (
              <CustomSelect
                data={createDataSelectOptions(
                  activities,
                  selectedTours.defaultActivity,
                )}
                selectedItem={selectedActivitiesItem}
                onChange={handleActivityChange}
              />
            )}
            {countries && (
              <CustomSelect
                data={createDataSelectOptions(
                  countries,
                  selectedTours.defaultCountry,
                )}
                selectedItem={selectedCountryItem}
                onChange={handleCountryChange}
              />
            )}
          </DropdownList>
        </AnimatedText>
      </div>

      <ToursList
        to={Pages.DESTINATIONS}
        isLoading={isLoading}
        isLoadMore={isLoadMore}
        tours={tours}
        quantityPerPage={PER_PAGE}
        loadMore={loadMore}
        resetVisibleTours={resetVisibleTours}
        filtersChanged={filtersChanged}
      />
    </section>
  );
};

export default Destinations;
