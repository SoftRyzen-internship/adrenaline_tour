'use client';
import { useState, useEffect, useCallback } from 'react';

import { ISelectState, ITours } from '@/@types';
import { Pages, IFilters } from '@/@types';
import { fetchFilteredTours } from '@/actions/requests';
import AnimationContainer from '@/components/common/AnimationContainer';
import DropdownList from '@/components/common/DropdownList';
import CustomSelect from '@/components/ui/CustomSelect';
import MonthSlider from '@/components/ui/MonthSlider';
import ToursList from '@/components/ui/ToursList';
import { selectedTours } from '@/data';
import { calendar } from '@/data';
import { createDataSelectOptions, createStartAndEndDayOfMonth } from '@/utils';

const defaultActivity: ISelectState = {
  id: -1,
  attributes: { name: selectedTours.defaultActivity },
};
const defaultCountry: ISelectState = {
  id: -1,
  attributes: { name: selectedTours.defaultCountry },
};

const PER_PAGE = 9;
const Calendar = () => {
  const [page, setPage] = useState(1);
  const [currentMonth, setCurrentMonth] = useState(new Date());
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

  const { startOfMonth, endOfMonth } =
    createStartAndEndDayOfMonth(currentMonth);

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
        const tourByMonth = await fetchFilteredTours(filters);

        if (page === 1) {
          setTours(tourByMonth.tours.data);
        } else {
          setTours(prevTours => [...prevTours, ...tourByMonth.tours.data]);
        }

        if (page === 1) {
          setActivities(tourByMonth.activities.data);
          setCountries(tourByMonth.countries.data);
        }
        const totalPage = tourByMonth.tours.meta.pagination.pageCount;
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
      startOfMonth,
      endOfMonth,
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
  }, [
    startOfMonth,
    endOfMonth,
    selectedActivitiesItem,
    selectedCountryItem,
    page,
    fetchData,
  ]);

  const handleMonthChange = (newMonth: Date) => {
    setCurrentMonth(newMonth);
    setPage(1);
    setTours([]);
    setSelectedActivitiesItem(defaultActivity);
    setSelectedCountryItem(defaultCountry);
  };

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
    <section
      className='section pt-[104px] md:pt-[128px] xl:pt-[160px]'
      id={Pages.CALENDAR}
    >
      <div className='container'>
        <h1 className='hidden'>{calendar.title}</h1>
        <div className='items-center justify-between xl:mb-12 xl:flex xl:border-b-[0.5px] xl:border-accentDarkOrange'>
          <MonthSlider
            currentMonth={currentMonth}
            onMonthChange={handleMonthChange}
          />

          <AnimationContainer className='xl:[--x-hidden:80px]'>
            <DropdownList className='mb-4'>
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
          </AnimationContainer>
        </div>

        <ToursList
          isLoading={isLoading}
          isLoadMore={isLoadMore}
          tours={tours}
          quantityPerPage={PER_PAGE}
          loadMore={loadMore}
          resetVisibleTours={resetVisibleTours}
          filtersChanged={filtersChanged}
          to={Pages.CALENDAR}
        />
      </div>
    </section>
  );
};

export default Calendar;
