import DisclosureFaq from '@/components/common/DisclosureFaq';
import { faq } from '@/data';

const Faq: React.FC = () => {
  const { disclosures } = faq;
  return (
    <section className='section'>
      <div className='container'>
        <h2 className='section-title mb-10 text-center md:mb-14'>FAQ</h2>
        <DisclosureFaq disclosures={disclosures} />
      </div>
    </section>
  );
};

export default Faq;
