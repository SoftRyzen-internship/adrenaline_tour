import Observer from '@/components/common/Observer';
import TourCard from '@/components/common/TourCard';

const Home = () => {
  return (
    <main className='min-h-screen'>
      <Observer />
      <div className='section container'>
        <h1 className='section-title'>Hel</h1>
      </div>
      <div className='section container'>
        <TourCard />
      </div>
    </main>
  );
};

export default Home;
