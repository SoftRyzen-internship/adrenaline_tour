import type { Metadata } from 'next';

import { Pages } from '@/@types';
import { metaData } from '@/data';
import Gallery from '@/sections/Gallery';
import Hero from '@/sections/Hero';
import Reviews from '@/sections/Reviews';
import Tips from '@/sections/Tips';

export const metadata: Metadata = {
  title: metaData.tourTitle,
  alternates: {
    canonical: 'tours',
  },
};

const ToursPage = () => {
  return (
    <>
      <Hero page={Pages.TOURS} />
      <Tips />
      <Gallery />
      <Reviews />
    </>
  );
};

export default ToursPage;
