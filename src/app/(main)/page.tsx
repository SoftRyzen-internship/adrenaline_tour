import { Pages } from '@/@types';
import { fetchAllTours } from '@/actions/requests';
import Gallery from '@/sections/Gallery';
import Hero from '@/sections/Hero';
import OurActivities from '@/sections/OurActivities';
import Reviews from '@/sections/Reviews';
import UpcomingTours from '@/sections/UpcomingTours';
import Welcome from '@/sections/Welcome';

const HomePage = async () => {
  const dataAllTours = await fetchAllTours();

  return (
    <>
      <Hero page={Pages.MAIN} />
      <UpcomingTours dataAllTours={dataAllTours} />
      <Welcome />
      <OurActivities />
      <Gallery />
      <Reviews />
    </>
  );
};

export default HomePage;
