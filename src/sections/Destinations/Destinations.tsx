import SelectedTours from '@/components/ui/SelectedTours';
import { destinations } from '@/data';

const Destinations = () => {
  return (
    <section id='destinations' className='section container relative'>
      <h2 className='section-title mb-10 whitespace-break-spaces md:mb-14 xl:mb-16'>
        {destinations.title}
      </h2>

      <SelectedTours pageSize={6} />
    </section>
  );
};

export default Destinations;
