'use client';
import React, { useState, useEffect } from 'react';

import fetchToursByMonth from '@/actions/requests/fetchToursByMonth';
import MonthSlider from '@/components/ui/MonthSlider';
import TourCard from '@/components/ui/TourCard';

const getStartAndEndOfMonth = date => {
  const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  const formatDate = date => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return {
    startOfMonth: formatDate(startOfMonth),
    endOfMonth: formatDate(endOfMonth),
  };
};

interface ICalendarProps {}

const Calendar: React.FC<ICalendarProps> = () => {
  const [tours, setTours] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const { startOfMonth, endOfMonth } = getStartAndEndOfMonth(currentMonth);

  useEffect(() => {
    const fetchData = async () => {
      const tourByMonth = await fetchToursByMonth(startOfMonth, endOfMonth);
      setTours(tourByMonth);
    };

    fetchData();
  }, [startOfMonth, endOfMonth]);

  const handleMonthChange = newMonth => {
    setCurrentMonth(newMonth);
  };

  return (
    <section className='section pt-[104px]'>
      <div className='container'>
        <MonthSlider
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
        />

        <div className='mb-8 grid grid-cols-1 gap-2 sm:grid-cols-2 md:mb-14 xl:grid-cols-3'>
          {tours?.map(item => <TourCard key={item.id} data={item} />)}
        </div>
      </div>
    </section>
  );
};

export default Calendar;
