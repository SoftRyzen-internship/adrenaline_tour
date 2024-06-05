import { Pages } from '@/@types';
import Observer from '@/components/common/Observer';
import Gallery from '@/sections/Gallery';
import Hero from '@/sections/Hero';
import Reviews from '@/sections/Reviews';
import UpcomingTours from '@/sections/UpcomingTours';
import Welcome from '@/sections/Welcome';

const HomePage = () => {
  return (
    <>
      <Hero page={Pages.MAIN} />
      <UpcomingTours />
      <Welcome />
      <Gallery />
      <Reviews />
      <Observer />
    </>
  );
};

export default HomePage;
