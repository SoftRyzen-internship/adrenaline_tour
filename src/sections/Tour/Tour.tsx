import { ITourProps } from '@/@types';
import FeaturesTable from '@/components/common/FeaturesTable';
import TourImg from '@/components/ui/TourImg';
import TourMainInfo from '@/components/ui/TourMainInfo';
import TourPlans from '@/components/ui/TourPlans';
import TourRent from '@/components/ui/TourRent';
import TourServices from '@/components/ui/TourServices';

const Tour: React.FC<ITourProps> = ({ slug }) => {
  return (
    <section className='pb-10 md:pb-[60px] md:pt-[128px] xl:pb-20 xl:pt-[160px]'>
      <div className='xl:hidden'>
        <TourImg slug={slug} />
        <TourMainInfo slug={slug} />
        <FeaturesTable slug={slug} />
        <TourPlans slug={slug} />
        <TourServices slug={slug} />
        <TourRent slug={slug} />
      </div>
      <div className='notXL:hidden'>
        <TourImg slug={slug} />
        <div className='xl:container xl:flex xl:gap-16'>
          <div>
            <TourMainInfo slug={slug} />
            <TourPlans slug={slug} />
            <TourServices slug={slug} />
            <TourRent slug={slug} />
          </div>
          <FeaturesTable slug={slug} />
        </div>
      </div>
    </section>
  );
};

export default Tour;
