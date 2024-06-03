import clsx from 'clsx';

import Slider from '@/components/common/Slider';
import ReviewCard from '@/components/ui/ReviewCard';
import { reviews } from '@/data';

import s from './Reviews.module.css';

const slides = reviews.reviews.map(
  ({ id, title, description, name, date }, index) => ({
    id: id,
    content: (
      <ReviewCard
        key={id}
        index={index}
        title={title}
        description={description}
        name={name}
        date={date}
      />
    ),
  }),
);

const Reviews = () => {
  return (
    <section
      className={clsx(
        'section bg-accentDefaultOrange pt-[84px] md:pt-[138px] xl:pt-[216px]',
        s['bgReviews'],
      )}
    >
      <div className='container relative'>
        <div className='top-[41px] xl:absolute'>
          <h2 className='section-title mb-4 text-center text-white md:mb-6'>
            {reviews.title}
          </h2>
          <p className='mx-auto mb-[61px] w-[267px] text-center font-inter text-light text-white md:mb-12 md:w-[403px] md:text-medium xl:mb-0 xl:w-[345px] xl:text-left xl:text-lightLarge'>
            {reviews.description}
          </p>
        </div>
        <Slider
          slides={slides}
          section='reviews'
          className={'xl:ml-auto xl:w-[700px]'}
        />
      </div>
    </section>
  );
};

export default Reviews;
