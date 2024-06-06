import Slider from '@/components/common/Slider';
import TourCard from '@/components/ui/TourCard';
import { worthVisiting } from '@/data';
import mockdatatourCard from '@/data/mockdatatourCard.json';

const slides = mockdatatourCard.map(item => ({
  id: item.id,
  content: <TourCard data={item} />,
}));

const WorthVisiting = () => {
  return (
    <section className='section container'>
      <h2 className='section-title mb-8 w-[212px] md:mb-14 md:w-[478px] xl:mb-[86px] xl:w-[654px]'>
        {worthVisiting.title}
      </h2>
      <Slider slides={slides} section='worthVisiting' />
    </section>
  );
};

export default WorthVisiting;
