import { SLIDER_THRESHOLD } from '@/@types';
import { fetchRecommendedTours } from '@/actions/requests';
import Slider from '@/components/common/Slider';
import Title from '@/components/ui/Title';
import TourCard from '@/components/ui/TourCard';
import { worthVisiting } from '@/data';

const WorthVisiting = async () => {
  const dataAllTours = await fetchRecommendedTours();
  const data = dataAllTours ?? [];

  const shouldShowSlider = data.length >= SLIDER_THRESHOLD;

  const worthVisitingContent = shouldShowSlider ? (
    <Slider
      section='worthVisiting'
      slides={data.map(item => ({
        id: item.id,
        content: <TourCard key={item.id} data={item} />,
      }))}
    />
  ) : (
    <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3'>
      {data.map(item => (
        <TourCard key={item.id} data={item} />
      ))}
    </div>
  );
  return (
    <section className='section container'>
      <Title className='section-title mb-8 w-[212px] md:mb-14 md:w-[478px] xl:mb-[86px] xl:w-[654px]'>
        {worthVisiting.title}
      </Title>
      {worthVisitingContent}
    </section>
  );
};

export default WorthVisiting;
