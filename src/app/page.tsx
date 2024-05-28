import Observer from '@/components/common/Observer';
import TourCard from '@/components/common/TourCard';
import mockdatatourCard from '@/data/mockdatatourCard.json';

const Home = () => {
  return (
    <main className='min-h-screen'>
      <Observer />
      <div className='section container'>
        <h1 className='section-title'>Hel</h1>
      </div>
      <section className='section'>
        <div className='container'>
          <TourCard data={mockdatatourCard} />
        </div>
      </section>
    </main>
  );
};

export default Home;
