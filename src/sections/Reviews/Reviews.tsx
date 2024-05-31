import { reviews } from '@/data';

const Reviews = () => {
  return (
    <section className='section bg-accentDefaultOrange'>
      <div className='container'>
        <h2 className='section-title'>{reviews.title}</h2>
        <p>{reviews.description}</p>
      </div>
    </section>
  );
};

export default Reviews;
