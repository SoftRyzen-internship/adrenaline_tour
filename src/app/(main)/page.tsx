import Observer from '@/components/common/Observer';
import UpcomingTours from '@/sections/UpcomingTours';

const HomePage = () => {
  return (
    <>
      <h1 className='bg-green-400 text-6xl'>Home Page</h1>;
      <UpcomingTours />
      <Observer />
    </>
  );
};

export default HomePage;
