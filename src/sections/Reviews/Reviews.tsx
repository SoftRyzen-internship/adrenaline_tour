import clsx from 'clsx';

import { IReview } from '@/@types';
import { fetchReviews } from '@/actions/requests';
import AnimationContainer from '@/components/common/AnimationContainer';
import Slider from '@/components/common/Slider';
import ReviewCard from '@/components/ui/ReviewCard';
import Title from '@/components/ui/Title';
import { reviews } from '@/data';

import s from './Reviews.module.css';

const Reviews = async () => {
  const dataReviews: IReview[] = await fetchReviews();
  const data = dataReviews ?? [];

  const slides = data.map(({ id, title, text, author, date }, index) => ({
    id: id,
    content: (
      <ReviewCard
        key={id}
        index={index}
        title={title}
        description={text}
        name={author}
        date={date}
      />
    ),
  }));

  return (
    <section
      className={clsx(
        'section bg-accentDefaultOrange pt-[84px] md:pt-[138px] xl:h-[800px] xl:pt-[216px]',
        s['bgReviews'],
      )}
    >
      <div className='container relative'>
        <div className='top-[41px] xl:absolute'>
          <Title className='section-title mb-4 text-center text-white md:mb-6'>
            {reviews.title}
          </Title>

          <AnimationContainer className='xl:[--x-hidden:80px]'>
            <p className='mx-auto mb-[61px] w-[267px] text-center font-inter text-light text-white md:mb-12 md:w-[403px] md:text-medium xl:mb-0 xl:w-[345px] xl:text-left xl:text-lightLarge'>
              {reviews.description}
            </p>
          </AnimationContainer>
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
