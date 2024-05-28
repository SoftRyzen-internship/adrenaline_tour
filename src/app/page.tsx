import Observer from '@/components/common/Observer';
import TourCard from '@/components/common/TourCard';

const Home = () => {
  return (
    <main className='min-h-screen'>
      <Observer>
        <TourCard />
      </Observer>
    </main>
  );
};

export default Home;
