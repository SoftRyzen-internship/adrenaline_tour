import CalendarIcon from '@/../public/icons/date.svg';
import Slider from '@/components/common/Slider';
import LinkButton from '@/components/ui/LinkButton';
import TourCard from '@/components/ui/TourCard';
import { upcomingTours } from '@/data';
import mockdatatourCard from '@/data/mockdatatourCard.json';

const slides = mockdatatourCard.map(item => ({
  id: item.id,
  content: <TourCard data={item} />,
}));

const UpcomingTours = () => {
  return (
    <section className='section container'>
      <h2 className='section-title mb-8 w-[206px] md:mb-14 md:w-[478px] xl:mb-12 xl:w-[520px]'>
        {upcomingTours.title}
      </h2>
      <Slider slides={slides} />
      <div className='flex justify-center'>
        <LinkButton
          href='/'
          variant='main'
          iconPosition='before'
          icon={
            <CalendarIcon
              width={24}
              height={24}
              className='h-6 w-6 md:h-8 md:w-8'
            />
          }
          className={'mt-8 w-full md:mt-14 md:w-[330px] md:py-[14px]'}
        >
          {upcomingTours.btn}
        </LinkButton>
      </div>
    </section>
  );
};

export default UpcomingTours;
