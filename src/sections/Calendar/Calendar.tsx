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
  const [totalPages, setTotalPages] = useState(0);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [tours, setTours] = useState<ITours[]>([]);
  const [countries, setCountries] = useState<ISelectState[] | null>(null);
  const [activities, setActivities] = useState<ISelectState[] | null>(null);
  const [selectedActivitiesItem, setSelectedActivitiesItem] =
    useState<ISelectState>(defaultActivity);
  const [selectedCountryItem, setSelectedCountryItem] =
    useState<ISelectState>(defaultCountry);
  const [isLoading, setIsLoading] = useState(false);
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
        setTotalPages(tourByMonth.tours.meta.pagination.pageCount);
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
      startOfMonth,
      endOfMonth,
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
  };

  return (
    <section
      className='section pt-[104px] md:pt-[128px] xl:pt-[160px]'
      id={Pages.CALENDAR}
    >
      <div className='container'>
        <div className='items-center justify-between xl:mb-12 xl:flex xl:border-b-[0.5px] xl:border-accentDarkOrange'>
          <MonthSlider
            currentMonth={currentMonth}
            onMonthChange={handleMonthChange}
          />

          <AnimationContainer className='xl:[--x-hidden:80px]'>
            <DropdownList className='mb-4'>
              {activities && (
                <CustomSelect
                  data={createDataSelectOptions(activities, 'Всі активності')}
                  selectedItem={selectedActivitiesItem}
                  onChange={setSelectedActivitiesItem}
                />
              )}
              {countries && (
                <CustomSelect
                  data={createDataSelectOptions(countries, 'Всі країни')}
                  selectedItem={selectedCountryItem}
                  onChange={setSelectedCountryItem}
                />
              )}
            </DropdownList>
          </AnimationContainer>
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
      </div>
    </section>
  );
};

export default Calendar;
