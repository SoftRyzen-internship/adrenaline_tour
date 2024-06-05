import { Pages } from '@/@types';
import Gallery from '@/sections/Gallery';
import Hero from '@/sections/Hero';
import Rules from '@/sections/Rules';

const ToursPage = () => {
  return (
    <>
      <Hero page={Pages.TOURS} />
      <Rules />
      <Gallery />
    </>
  );
};

export default ToursPage;
