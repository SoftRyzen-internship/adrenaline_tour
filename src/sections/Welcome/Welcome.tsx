'use client';
import clsx from 'clsx';

import { IdForScroll } from '@/@types';
import { welcome } from '@/data';

import s from './Welcome.module.css';

import LinkButton from '@/components/ui/LinkButton';
import Title from '@/components/ui/Title';
import AnimationContainer from '@/components/common/AnimationContainer';

import ArrowRightDownIcon from '/public/icons/arrow-right_up.svg';

const Welcome = () => {
  return (
    <section
      className={clsx(
        'bg-blueDefault pb-[182px] pt-[110px] md:pb-[216px] md:pt-[111px] xl:pb-[179px] xl:pt-[120px]',
        s['bgWelcome'],
      )}
    >
      <div className='container'>
        <Title className='section-title mb-6 text-center text-white xl:mx-auto xl:mb-8 xl:w-[791px]'>
          {welcome.title}
        </Title>

        <AnimationContainer className='xl:[--x-hidden:80px]'>
          <p className='mb-12 text-center font-inter text-light text-white md:mx-auto md:w-[545px] md:text-[16px] md:leading-[1.50] xl:w-[729px] xl:text-[18px]'>
            {welcome.description}
          </p>
        </AnimationContainer>

        <AnimationContainer className='flex justify-center xl:[--y-hidden:-80px]'>
          <LinkButton
            to={IdForScroll.CONTACTS}
            toScroll={true}
            variant='main'
            iconPosition='after'
            icon={
              <ArrowRightDownIcon
                width={24}
                height={24}
                className='h-6 w-6 md:h-8 md:w-8'
              />
            }
            className={'w-full md:w-[294px]'}
          >
            {welcome.btn}
          </LinkButton>
        </AnimationContainer>
      </div>
    </section>
  );
};

export default Welcome;
