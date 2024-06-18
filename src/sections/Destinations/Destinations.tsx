'use client';

import { destinations } from '@/data';

const Destinations = () => {
  return (
    <section id='destinations' className='section container'>
      <div className='mb-10 items-center justify-between md:mb-14 xl:mb-16 xl:flex'>
        <h2 className='section-title mb-10 whitespace-break-spaces xl:mb-0'>
          {destinations.title}
        </h2>
      </div>
    </section>
  );
};

export default Destinations;
