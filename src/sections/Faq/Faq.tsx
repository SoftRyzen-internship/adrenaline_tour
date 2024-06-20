import AnimationContainer from '@/components/common/AnimationContainer';
import DisclosureFaq from '@/components/common/DisclosureFaq';
import FaqNavMenu from '@/components/common/FaqNavMenu';
import Title from '@/components/ui/Title';
import { faq } from '@/data';

const Faq: React.FC = () => {
  const { disclosures } = faq;
  return (
    <section className='section container'>
      <div className='top-0 z-10 pb-4 xl:sticky xl:bg-white/40'>
        <div className='bg-white xl:mb-10 xl:flex xl:justify-between'>
          <Title className='section-title mb-10 text-start md:mb-14 xl:mb-0'>
            FAQ
          </Title>

          <AnimationContainer className='xl:[--x-hidden:80px]'>
            <FaqNavMenu />
          </AnimationContainer>
        </div>
      </div>

      <DisclosureFaq disclosures={disclosures} />
    </section>
  );
};

export default Faq;
