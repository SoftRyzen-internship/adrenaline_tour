import { Pages } from '@/@types';
import Gallery from '@/sections/Gallery';
import Hero from '@/sections/Hero';
import Reviews from '@/sections/Reviews';
import Rules from '@/sections/Rules';
import Tips from '@/sections/Tips';

const ToursPage = () => {
  return (
    <>
      <Hero page={Pages.TOURS} />
      <Tips />
      <Rules />
      <Gallery />
      <Reviews />
    </>
  );
};

export default ToursPage;
