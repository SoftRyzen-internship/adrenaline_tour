import DisclosureFaq from '@/components/common/DisclosureFaq';
import FaqNavMenu from '@/components/common/FaqNavMenu';
import { faq } from '@/data';

const Faq: React.FC = () => {
  const { disclosures } = faq;
  return (
    <section className='section'>
      <div className='container'>
        <div className='sticky top-0 z-10 bg-white xl:mb-16 xl:flex xl:justify-between xl:pb-5'>
          <h2 className='section-title mb-10 text-center md:mb-14 xl:mb-0'>
            FAQ
          </h2>
          <FaqNavMenu />
        </div>

        <DisclosureFaq disclosures={disclosures} />
      </div>
    </section>
  );
};

export default Faq;
