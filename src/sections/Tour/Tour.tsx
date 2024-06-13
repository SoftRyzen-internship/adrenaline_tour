import { ITourProps } from '@/@types';
import TourImg from '@/components/ui/TourImg';
import TourMainInfo from '@/components/ui/TourMainInfo';
import TourPlans from '@/components/ui/TourPlans';
import TourRent from '@/components/ui/TourRent';
import TourServices from '@/components/ui/TourServices';

const Tour: React.FC<ITourProps> = ({ slug }) => {
  return (
    <section className='pb-10 md:pb-[60px] md:pt-[128px] xl:pb-20 xl:pt-[160px]'>
      <TourImg slug={slug} />
      <TourMainInfo slug={slug} />
      <TourPlans slug={slug} />
      <TourServices slug={slug} />
      <TourRent slug={slug} />
    </section>
  );
};

export default Tour;
