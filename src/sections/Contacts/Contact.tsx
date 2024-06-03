import clsx from 'clsx';

import { IdForScroll } from '@/@types';
import Form from '@/components/common/Form';
import Phones from '@/components/ui/Phones';
import { form } from '@/data';

import s from './Contacts.module.css';

const Contact = () => {
  return (
    <section
      id={IdForScroll.CONTACTS}
      className={clsx(
        s['contacts-bg'],
        'section bg-darkBlue pt-[124px] md:pt-[139px] xl:pt-[122px]',
      )}
    >
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
