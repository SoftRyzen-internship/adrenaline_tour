import { Pages } from '@/@types';
import Gallery from '@/sections/Gallery';
import Hero from '@/sections/Hero';
import Reviews from '@/sections/Reviews';

const ToursPage = () => {
  return (
    <>
      <Hero page={Pages.TOURS} />
      <Gallery />
      <Reviews />
    </>
  );
};

export default ToursPage;
