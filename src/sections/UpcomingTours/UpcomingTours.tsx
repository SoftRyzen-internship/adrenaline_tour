import CalendarIcon from '/public/icons/date.svg';

import { fetchAllTours } from '@/actions/requests';
import Slider from '@/components/common/Slider';
import LinkButton from '@/components/ui/LinkButton';
import TourCard from '@/components/ui/TourCard';
import Title from '@/components/ui/Title';
import { Pages, SLIDER_THRESHOLD } from '@/@types';
import { upcomingTours } from '@/data';
import AnimatedText from '@/components/ui/AnimatedText';

const UpcomingTours = async () => {
  const dataAllTours = await fetchAllTours();
  const tours = dataAllTours ?? [];

  const shouldShowSlider = tours.length >= SLIDER_THRESHOLD;

  const upcomingToursContent = shouldShowSlider ? (
    <Slider
      section='upcomingTours'
      className={'mb-8 md:mb-14'}
      slides={tours.map(item => ({
        id: item.id,
        content: <TourCard key={item.id} data={item} />,
      }))}
    />
  ) : (
    <div className='mb-8 grid grid-cols-1 gap-2 sm:grid-cols-2 md:mb-14 xl:grid-cols-3'>
      {tours.map(item => (
        <TourCard key={item.id} data={item} />
      ))}
    </div>
  );

  return (
    <section className='section container'>
      <Title className='section-title mb-8 w-[206px] md:mb-14 md:w-[478px] xl:mb-12 xl:w-[520px]'>
        {upcomingTours.title}
      </Title>

      {upcomingToursContent}

      <AnimatedText className='xl:[--y-hidden:-80px]'>
        <div className='flex justify-center'>
          <LinkButton
            href={Pages.CALENDAR}
            variant='main'
            iconPosition='before'
            icon={
              <CalendarIcon
                width={24}
                height={24}
                className='h-6 w-6 md:h-8 md:w-8'
              />
            }
            className={'w-full md:w-[332px] md:py-[14px]'}
          >
            {upcomingTours.btn}
          </LinkButton>
        </div>
      </AnimatedText>
    </section>
  );
};

export default UpcomingTours;
