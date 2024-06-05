import { Pages } from '@/@types';
import Gallery from '@/sections/Gallery';
import Hero from '@/sections/Hero';
import Tips from '@/sections/Tips';

const ToursPage = () => {
  return (
    <>
      <Hero page={Pages.TOURS} />
      <Tips />
      <Gallery />
    </>
  );
};

export default ToursPage;
