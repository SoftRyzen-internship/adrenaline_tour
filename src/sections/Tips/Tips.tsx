import DisclosureTour from '@/components/common/DisclosureTour';
import TipsList from '@/components/ui/TipsList';
import { tipsData } from '@/data';

const Tips = () => {
  return (
    <section className='section bg-[#F5FAFD]'>
      <div className='container'>
        <h2 className='section-title mb-8 text-blueDefault md:mb-12 xl:mb-16'>
          {tipsData.title[0]}
          <br />
          {tipsData.title[1]}
        </h2>
        <TipsList />
        <DisclosureTour />
      </div>
    </section>
  );
};

export default Tips;
