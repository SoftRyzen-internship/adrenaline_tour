import { IdForScroll } from '@/@types';
import Form from '@/components/common/Form';
import Phones from '@/components/ui/Phones';
import { form } from '@/data';

const Contact = () => {
  return (
    <section id={IdForScroll.CONTACTS} className='section bg-darkBlue'>
      <div className='container'>
        <h2 className='section-title mb-6 text-white smOnly:pl-[10px] md:mb-10 xl:mb-20 xl:max-w-[854px]'>
          {form.title}
        </h2>
        <div className='xl:flex'>
          <Phones
            variant='contacts'
            className='smOnly:pl-[10px] xl:w-1/2 notXL:mb-[60px]'
          />
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
