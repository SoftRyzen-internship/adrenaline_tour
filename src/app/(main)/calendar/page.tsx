import type { Metadata } from 'next';

import { Pages } from '@/@types';
import Observer from '@/components/common/Observer';
import { metaData } from '@/data';

export const metadata: Metadata = {
  title: metaData.calendarTitle,
  alternates: {
    canonical: Pages.CALENDAR,
  },
};

const HomePage = () => {
  return (
    <>
      <h1 className=' bg-green-400 text-6xl'>Calendar Page</h1>;
      <Observer />
    </>
  );
};

export default HomePage;
