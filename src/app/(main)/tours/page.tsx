import { Pages } from '@/@types';
import Gallery from '@/sections/Gallery';
import Hero from '@/sections/Hero';
import Reviews from '@/sections/Reviews';
import Tips from '@/sections/Tips';

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
