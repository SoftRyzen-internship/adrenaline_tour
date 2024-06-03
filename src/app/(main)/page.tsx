import Observer from '@/components/common/Observer';
import Gallery from '@/sections/Gallery';
import UpcomingTours from '@/sections/UpcomingTours';
import Welcome from '@/sections/Welcome';

const HomePage = () => {
  return (
    <>
      <h1 className='bg-green-400 text-6xl'>Home Page</h1>;
      <UpcomingTours />
      <Welcome />
      <Gallery />
      <Observer />
    </>
  );
};

export default HomePage;
