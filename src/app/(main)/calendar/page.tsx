import type { Metadata } from 'next';

import { metaData } from '@/data';

export const metadata: Metadata = {
  title: metaData.calendarTitle,
  alternates: {
    canonical: '/calendar',
  },
};

const HomePage = () => {
  return <h1 className=' bg-green-400 text-6xl'>Calendar Page</h1>;
};

export default HomePage;
