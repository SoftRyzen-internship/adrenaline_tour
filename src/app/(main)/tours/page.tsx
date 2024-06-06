import { Pages } from '@/@types';
import Gallery from '@/sections/Gallery';
import Hero from '@/sections/Hero';
import Reviews from '@/sections/Reviews';
import WorthVisiting from '@/sections/WorthVisiting';

const ToursPage = () => {
  return (
    <>
      <Hero page={Pages.TOURS} />
      <WorthVisiting />
      <Gallery />
      <Reviews />
    </>
  );
};

export default ToursPage;
