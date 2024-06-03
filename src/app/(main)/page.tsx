import Observer from '@/components/common/Observer';
import Reviews from '@/sections/Reviews';
import UpcomingTours from '@/sections/UpcomingTours';

const HomePage = () => {
  return (
    <>
      <UpcomingTours />
      <Reviews />
      <h1 className='bg-green-400 text-6xl'>Home Page</h1>;
      <Observer />
    </>
  );
};

export default HomePage;
