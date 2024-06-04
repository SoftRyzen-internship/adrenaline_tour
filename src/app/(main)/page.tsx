import Gallery from '@/sections/Gallery';
import UpcomingTours from '@/sections/UpcomingTours';
import Welcome from '@/sections/Welcome';

const HomePage = () => {
  return (
    <>
      <h1 className='h-24 bg-lime-900 text-center text-6xl'>Home Page</h1>;
      <UpcomingTours />
      <Welcome />
      <Gallery />
    </>
  );
};

export default HomePage;
