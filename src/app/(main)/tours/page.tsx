import { Pages } from '@/@types';
import Gallery from '@/sections/Gallery';
import Hero from '@/sections/Hero';

const ToursPage = () => {
  return (
    <>
      <h1 className='bg-green-400 text-6xl'>Tours Page</h1>
      <Hero page={Pages.TOURS} />
      <Gallery />
    </>
  );
};

export default ToursPage;
