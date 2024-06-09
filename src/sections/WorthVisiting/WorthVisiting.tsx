import { IAllToursProps } from '@/@types';
import Slider from '@/components/common/Slider';
import TourCard from '@/components/ui/TourCard';
import { worthVisiting } from '@/data';

const WorthVisiting: React.FC<IAllToursProps> = ({ dataAllTours }) => {
  const recommendedData = dataAllTours.filter(
    item => item.attributes.recommended,
  );

  const shouldShowSlider = recommendedData.length >= 4;

  const worthVisitingContent = shouldShowSlider ? (
    <Slider
      section='worthVisiting'
      slides={recommendedData.map(item => ({
        id: item.id,
        content: <TourCard key={item.id} data={item} />,
      }))}
    />
  ) : (
    <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3'>
      {recommendedData.map(item => (
        <TourCard key={item.id} data={item} />
      ))}
    </div>
  );

  return (
    <section className='section container'>
      <h2 className='section-title mb-8 w-[212px] md:mb-14 md:w-[478px] xl:mb-[86px] xl:w-[654px]'>
        {worthVisiting.title}
      </h2>
      {worthVisitingContent}
    </section>
  );
};

export default WorthVisiting;
