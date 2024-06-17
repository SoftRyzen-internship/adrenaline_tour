'use client';
import { useState, useEffect, useCallback } from 'react';

import { ISelectState, ITour } from '@/@types';
import fetchToursByMonth from '@/actions/requests/fetchToursByMonth';
import DropdownList from '@/components/common/DropdownList';
import CustomSelect from '@/components/ui/CustomSelect';
import ErrorComponent from '@/components/ui/ErrorComponent';
import MonthSlider from '@/components/ui/MonthSlider';
import TourCard from '@/components/ui/TourCard';
import { createDataSelectOptions, createStartAndEndDayOfMonth } from '@/utils';

interface ICalendarProps {}
interface IFilters {
  activityName?: string;
  countryName?: string;
}

const defaultActivity: ISelectState = {
  id: -1,
  attributes: { name: 'Всі активності' },
};
const defaultCountry: ISelectState = {
  id: -1,
  attributes: { name: 'Всі країни' },
};

const Calendar: React.FC<ICalendarProps> = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [tours, setTours] = useState<ITour[] | null>(null);
  const [countries, setCountries] = useState<ISelectState[] | null>(null);
  const [activities, setActivities] = useState<ISelectState[] | null>(null);
  const [selectedActivitiesItem, setSelectedActivitiesItem] =
    useState<ISelectState>(defaultActivity);
  const [selectedCountryItem, setSelectedCountryItem] =
    useState<ISelectState>(defaultCountry);

  console.log(activities);
  console.log(selectedActivitiesItem);

  const { startOfMonth, endOfMonth } =
    createStartAndEndDayOfMonth(currentMonth);

  const fetchData = useCallback(
    async (filters: IFilters = {}) => {
      const tourByMonth = await fetchToursByMonth(
        startOfMonth,
        endOfMonth,
        filters,
      );
      setTours(tourByMonth.tours.data);
      setActivities(tourByMonth.activities.data);
      setCountries(tourByMonth.countries.data);
    },
    [startOfMonth, endOfMonth],
  );

  useEffect(() => {
    console.log('Первый useEffect');
    fetchData();
  }, [startOfMonth, endOfMonth, fetchData]);

  useEffect(() => {
    if (activities && !selectedActivitiesItem) {
      const activitiesData = createDataSelectOptions(
        activities,
        'Всі активності',
      );
      setSelectedActivitiesItem(activitiesData.at(-1) as ISelectState);
    }
    if (countries && !selectedCountryItem) {
      const countriesData = createDataSelectOptions(countries, 'Всі країни');
      setSelectedCountryItem(countriesData.at(-1) as ISelectState);
    }
  }, [activities, countries, selectedActivitiesItem, selectedCountryItem]);

  useEffect(() => {
    const filters: IFilters = {};
    if (selectedActivitiesItem?.id !== -1) {
      filters.activityName = selectedActivitiesItem?.attributes.name;
    }
    if (selectedCountryItem?.id !== -1) {
      filters.countryName = selectedCountryItem?.attributes.name;
    }

    if (selectedActivitiesItem || selectedCountryItem) {
      fetchData(filters);
    }
  }, [selectedActivitiesItem, selectedCountryItem, fetchData]);

  const handleMonthChange = (newMonth: Date) => {
    setCurrentMonth(newMonth);
  };

  return (
    <section className='section pt-[104px] md:pt-[128px] xl:pt-[160px]'>
      <div className='container'>
        <div className='items-center justify-between xl:mb-12 xl:flex xl:border-b-[0.5px] xl:border-accentDarkOrange'>
          <MonthSlider
            currentMonth={currentMonth}
            onMonthChange={handleMonthChange}
          />
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
        </div>
        {tours === null && <div>Завантаження</div>}
        {tours?.length === 0 && <ErrorComponent isLoadingError />}
        {tours && tours?.length > 0 && (
          <div className='mb-8 grid grid-cols-1 gap-2 sm:grid-cols-2 md:mb-14 xl:grid-cols-3'>
            {tours?.map(item => <TourCard key={item.id} data={item} />)}
          </div>
        )}
      </div>
    </section>
  );
};

export default Calendar;
