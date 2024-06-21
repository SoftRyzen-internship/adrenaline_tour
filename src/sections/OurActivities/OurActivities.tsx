'use client';
import ArrowRightDownIcon from '/public/icons/arrow-right_up.svg';

import ActivitiesGallery from '@/components/common/ActivitiesGallery';
import LinkButton from '@/components/ui/LinkButton';
import Title from '@/components/ui/Title';
import { activities } from '@/data';
import { Pages } from '@/@types';
import AnimationContainer from '@/components/common/AnimationContainer';

const OurActivities = () => {
  return (
    <section className='section container'>
      <Title className='section-title mb-[38px] whitespace-break-spaces md:mb-16 xl:mb-20'>
        {activities.title}
      </Title>

      <ActivitiesGallery />

      <AnimationContainer className='mt-14 flex w-full justify-center xl:[--x-hidden:80px]'>
        <LinkButton
          href={Pages.TOURS}
          className='w-full text-nowrap px-[16px] md:w-[381px] md:px-[28px]'
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
          {activities.button}{' '}
        </LinkButton>
      </AnimationContainer>
    </section>
  );
};

export default OurActivities;
