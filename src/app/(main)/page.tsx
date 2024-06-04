import Observer from '@/components/common/Observer';
import Gallery from '@/sections/Gallery';
import Hero from '@/sections/Hero';
import UpcomingTours from '@/sections/UpcomingTours';

const HomePage = () => {
  return (
    <>
      <h1 className='bg-green-400 text-6xl'>Home Page</h1>;
      <Hero page='main' />
      <UpcomingTours />
      <Observer />
      <Gallery />
    </>
  );
};

export default HomePage;
