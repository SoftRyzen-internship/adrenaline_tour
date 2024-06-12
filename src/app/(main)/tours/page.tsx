import type { Metadata } from 'next';

import { Pages } from '@/@types';
import { fetchAllTours } from '@/actions/requests';
import { metaData } from '@/data';
import Destinations from '@/sections/Destinations';
import Gallery from '@/sections/Gallery';
import Hero from '@/sections/Hero';
import Reviews from '@/sections/Reviews';
import Rules from '@/sections/Rules';
import Tips from '@/sections/Tips';
import WorthVisiting from '@/sections/WorthVisiting';

export const metadata: Metadata = {
  title: metaData.tourTitle,
  alternates: {
    canonical: Pages.TOURS,
  },
};

const ToursPage = async () => {
  const dataAllTours = await fetchAllTours();

  return (
    <>
      <Hero page={Pages.TOURS} />
      <Destinations />
      <WorthVisiting dataAllTours={dataAllTours} />
      <Tips />
      <Rules />
      <Gallery />
      <Reviews />
    </>
  );
};

export default ToursPage;
