import type { Metadata } from 'next';

import { Pages } from '@/@types';
import { metaData } from '@/data';
import Calendar from '@/sections/Calendar';

export const metadata: Metadata = {
  title: metaData.calendarTitle,
  alternates: {
    canonical: Pages.CALENDAR,
  },
};

const CalendarPage = () => {
  return <Calendar />;
};

export default CalendarPage;
