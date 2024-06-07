import DisclosureFaq from '@/components/common/DisclosureFaq';
import FaqNavMenu from '@/components/common/FaqNavMenu';
import { faq } from '@/data';

const Faq: React.FC = () => {
  const { disclosures } = faq;
  return (
    <section className='section'>
      <div className='container'>
        <div className='xl:mb- xl:mb-16 xl:flex xl:justify-between'>
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
