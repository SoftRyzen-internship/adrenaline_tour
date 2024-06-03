import Observer from '@/components/common/Observer';
import Gallery from '@/sections/Gallery';
import UpcomingTours from '@/sections/UpcomingTours';
import Welcome from '@/sections/Welcome';

const HomePage = () => {
  return (
    <>
      <UpcomingTours />
      <Welcome />
      <h1 className='bg-green-400 text-6xl'>Home Page</h1>;
      <Observer />
      <Gallery />
    </>
  );
};

export default HomePage;
