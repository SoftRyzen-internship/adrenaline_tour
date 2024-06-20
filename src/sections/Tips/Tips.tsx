import DisclosureTour from '@/components/common/DisclosureTour';
import TipsList from '@/components/ui/TipsList';
import Title from '@/components/ui/Title';
import { tipsData } from '@/data';

const Tips = () => {
  return (
    <section className='section bg-blueWhite'>
      <div className='container'>
        <Title className='section-title mb-8 text-blueDefault md:mb-12 xl:mb-16'>
          {tipsData.title[0]}
          <br />
          {tipsData.title[1]}
        </Title>
        <TipsList />
        <DisclosureTour />
      </div>
    </section>
  );
};

export default Tips;
