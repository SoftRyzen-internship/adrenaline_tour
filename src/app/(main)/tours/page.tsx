import { Pages } from '@/@types';
import Gallery from '@/sections/Gallery';
import Hero from '@/sections/Hero';
import WorthVisiting from '@/sections/WorthVisiting';

const ToursPage = () => {
  return (
    <>
      <Hero page={Pages.TOURS} />
      <WorthVisiting />
      <Gallery />
    </>
  );
};

export default ToursPage;
