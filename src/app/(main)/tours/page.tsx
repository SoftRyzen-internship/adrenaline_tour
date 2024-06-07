import type { Metadata } from 'next';

import { Pages } from '@/@types';
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

const ToursPage = () => {
  return (
    <>
      <Hero page={Pages.TOURS} />
      <Destinations />
      <WorthVisiting />
      <Tips />
      <Rules />
      <Gallery />
      <Reviews />
    </>
  );
};

export default ToursPage;
