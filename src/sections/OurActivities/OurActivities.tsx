import ArrowRightDownIcon from '/public/icons/arrow-right_up.svg';

import ActivitiesGallery from '@/components/common/ActivitiesGallery';
import LinkButton from '@/components/ui/LinkButton';
import { activities } from '@/data';
import { Pages } from '@/@types';

const OurActivities: React.FC = () => {
  return (
    <section className='section'>
      <div className='container'>
        <h2 className='section-title mb-[38px] whitespace-break-spaces md:mb-16 xl:mb-20'>
          {activities.title}
        </h2>

        <ActivitiesGallery />
        <div className='mt-14 flex w-full justify-center'>
          <LinkButton
            href={Pages.TOURS}
            className='w-full px-[16px] md:w-[381px] md:px-[28px]'
            variant='main'
            iconPosition='after'
            icon={
              <ArrowRightDownIcon
                width={24}
                height={24}
                className='h-6 w-6 md:h-8 md:w-8'
              />
            }
          >
            Переглянути всі активності{' '}
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

export default OurActivities;
