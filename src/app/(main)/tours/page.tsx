import { Pages } from '@/@types';
import Gallery from '@/sections/Gallery';
import Hero from '@/sections/Hero';

const ToursPage = () => {
  return (
    <>
      <Hero page={Pages.TOURS} />
      <Gallery />
    </>
  );
};

export default ToursPage;
