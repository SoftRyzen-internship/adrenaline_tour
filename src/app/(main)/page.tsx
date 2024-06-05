import { Pages } from '@/@types';
import Faq from '@/sections/Faq';
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
      <Faq />
    </>
  );
};

export default HomePage;
