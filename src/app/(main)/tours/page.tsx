import { Pages } from '@/@types';
import Gallery from '@/sections/Gallery';
import Hero from '@/sections/Hero';
import Reviews from '@/sections/Reviews';
import Rules from '@/sections/Rules';
import Tips from '@/sections/Tips';
import WorthVisiting from '@/sections/WorthVisiting';

const ToursPage = () => {
  return (
    <>
      <Hero page={Pages.TOURS} />
      <WorthVisiting />
      <Tips />
      <Rules />
      <Gallery />
      <Reviews />
    </>
  );
};

export default ToursPage;
