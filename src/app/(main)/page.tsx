import Observer from '@/components/common/Observer';
import UpcomingTours from '@/sections/UpcomingTours';

const HomePage = () => {
  return (
    <>
      <UpcomingTours />
      <h1 className='bg-green-400 text-6xl'>Home Page</h1>;
      <Observer />
    </>
  );
};

export default HomePage;
