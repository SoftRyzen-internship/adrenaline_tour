import Observer from '@/components/common/Observer';
import Gallery from '@/sections/Gallery';
import Reviews from '@/sections/Reviews';
import UpcomingTours from '@/sections/UpcomingTours';

const HomePage = () => {
  return (
    <>
      <h1 className='bg-green-400 text-6xl'>Home Page</h1>;
      <UpcomingTours />
      <Gallery />
      <Reviews />
      <Observer />
    </>
  );
};

export default HomePage;
