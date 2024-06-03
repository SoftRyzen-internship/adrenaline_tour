import { IdForScroll } from '@/@types';
import Phones from '@/components/ui/Phones';

const Contact = () => {
  return (
    <section id={IdForScroll.CONTACTS} className='section bg-darkBlue'>
      <div className='container'>
        <h2 className='section-title mb-6 text-white md:mb-10 xl:mb-20 xl:max-w-[854px]'>
          Залишайтеся на звʼязку!
        </h2>
        <div className='xl:flex'>
          <Phones variant='contacts' className='mb-[60px] xl:w-1/2' />
          <div>ФОРМА</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
